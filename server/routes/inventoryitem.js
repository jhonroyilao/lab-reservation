import express from 'express';
import supabase from '../config/supabaseClient.js';

const router = express.Router();

// GET all inventory items
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('inventoryitem')
    .select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// CREATE a new inventory item
router.post('/', async (req, res) => {
  const item = req.body;
  const { data, error } = await supabase
    .from('inventoryitem')
    .insert([item])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data[0]);
});

export default router;