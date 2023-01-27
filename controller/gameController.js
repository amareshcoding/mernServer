import Game from '../models/gameModel.js';

const registerGameUser = async (req, res) => {
  try {
    const user = await Game.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateScore = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const user = await Game.findByIdAndUpdate(id, changes, { new: true });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const generateRandomWord = async (req, res) => {
  try {
    const len = Math.floor(Math.random() * 6 + 1);
    const chars = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    var word = '';

    for (let i = 0; i < len; i++) {
      word += chars[Math.floor(Math.random() * 25)];
    }
    console.log('word: ', word);
    res.status(200).send(word);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { registerGameUser, updateScore, generateRandomWord };
