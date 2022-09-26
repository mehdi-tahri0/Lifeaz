const { defibrilateur } = require('../models');

/**
 * Creates a new defibrilateur
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
 const createDefibrilateur = async (req, res) => {
    try {
      const defibrilateur = await defibrilateur.create(req.body);
      return res.status(201).json({
        defibrilateur,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };


 /**
 * Fetches all defibrilateur
 * @param {*} req
 * @param {*} res
 * @returns Object
 */
const getAllDefibrilateur = async (req, res) => {
  try {
    const defibri = await defibrilateur.findAll();
    return res.status(200).json({ defibri });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


module.exports = {
    createDefibrilateur,
    getAllDefibrilateur,
  };
