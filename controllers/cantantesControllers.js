const Cantante = require("../models/cantantesModels");

// Crear un cantante
const crearCantante = async (req, res) => {
  try {
    const { nombre, apellido } = req.body;
    await Cantante.create({ nombre, apellido });
    res.json("Cantante creado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener todos los cantantes
const traerCantantes = async (req, res) => {
  try {
    const cantantes = await Cantante.findAll();
    res.json(cantantes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Obtener un cantante por ID
const traerCantante = async (req, res) => {
  try {
    const cantante = await Cantante.findByPk(req.params.id);
    res.json(cantante);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Borrar un cantante por ID
const borrarCantante = async (req, res) => {
  try {
    await Cantante.destroy({ where: { id: req.params.id } });
    res.json("Cantante eliminado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Actualizar un cantante por ID
const actualizarCantante = async (req, res) => {
  try {
    await Cantante.update(req.body, { where: { id: req.params.id } });
    res.json("Cantante actualizado correctamente");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { crearCantante, traerCantantes, traerCantante, borrarCantante, actualizarCantante };
