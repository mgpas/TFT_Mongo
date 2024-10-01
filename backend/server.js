// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Configurações
app.use(express.json());
app.use(cors());
const port = 5000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Conectado ao MongoDB!');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

// Definir os esquemas e modelos
const AugmentosSchema = new mongoose.Schema({
  augment_1: { type: String, required: true },
  augment_2: { type: String, required: true },
  augment_3: { type: String, required: true },
  match_id: { type: mongoose.Schema.Types.Number, required: true },
  puuid: { type: String, required: true }
}, { collection: 'augmentos' });
const ComposicaoSchema = new mongoose.Schema({
  active_units_count: { type: mongoose.Schema.Types.Number, required: true },
  match_id: { type: mongoose.Schema.Types.Number, required: true },
  puuid: { type: String, required: true },
  unit_1: { type: String, required: true },
  unit_2: { type: String },
  unit_3: { type: String },
  unit_4: { type: String },
  unit_5: { type: String },
  unit_6: { type: String },
  unit_7: { type: String },
  unit_8: { type: String },
  unit_9: { type: String },
  unit_10: { type: String }
}, { collection: 'composicao' });
const Info_PartidaSchema = new mongoose.Schema({
  info_partida_id: { type: mongoose.Schema.Types.Number, required: true },
  last_round: { type: mongoose.Schema.Types.Number, required: true },
  level: { type: mongoose.Schema.Types.Number, required: true },
  match_id: { type: mongoose.Schema.Types.Number, required: true },
  placement: { type: mongoose.Schema.Types.Number, required: true },
  puuid: { type: String, required: true }
}, { collection: 'info_partida' });
const PartidaSchema = new mongoose.Schema({
  game_length: { type: Number, required: true },
  game_length_minutes: { type: mongoose.Schema.Types.Number, required: true },
  match_id: { type: mongoose.Schema.Types.Number, required: true }
}, { collection: 'partida' });
const TraitsSchema = new mongoose.Schema({
  active_traits_count: { type: mongoose.Schema.Types.Number, required: true },
  match_id: { type: mongoose.Schema.Types.Number, required: true },
  puuid: { type: String, required: true },
  trait_1: { type: String, required: true },
  trait_2: { type: String },
  trait_3: { type: String },
  trait_4: { type: String },
  trait_5: { type: String },
  trait_6: { type: String },
  trait_7: { type: String },
  trait_8: { type: String }
}, { collection: 'traits' });
const JogadoresSchema = new mongoose.Schema({
  puuid: { type: String, required: true }
}, { collection: 'jogadores' });


const Augmentos = mongoose.model('Augmentos', AugmentosSchema);
const Composicao = mongoose.model('Composicao', ComposicaoSchema);
const Info_Partida = mongoose.model('Info_Partida', Info_PartidaSchema);
const Partida = mongoose.model('Partida', PartidaSchema);
const Traits = mongoose.model('Traits', TraitsSchema);
const Jogadores = mongoose.model('Jogadores', JogadoresSchema);

// Rotas para obter os dados
app.get('/augmentos', async (req, res) => {
    const augmentos = await Augmentos.find();
    res.json(augmentos);
});

app.get('/composicao', async (req, res) => {
    const composicao = await Composicao.find();
    res.json(composicao);
});

app.get('/info_partida', async (req, res) => {
    const info_Partida = await Info_Partida.find();
    res.json(info_Partida);
});

app.get('/partida', async (req, res) => {
    const partida = await Partida.find();
    res.json(partida);
});

app.get('/traits', async (req, res) => {
    const traits = await Traits.find();
    res.json(traits);
});

app.get('/jogadores', async (req, res) => {
    const jogadores = await Jogadores.find();
    res.json(jogadores);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});