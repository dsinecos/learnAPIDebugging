var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function (req, res) {
  const actors = [
    {
      id: 1,
      name: 'Heisenberg'
    },
    {
      id: 2,
      name: 'Pinkman'
    },
    {
      id: 3,
      name: 'Gus'
    }
  ]

  const actor = actors.filter(actor => actor.id == req.params.id)

  axios.get('https://api.github.com/users/' + actor[0].name)
    .then(githubProfile => {
      res.send(githubProfile.data)
    })
    .catch(error => {
      res.send(error)
    })

  // res.send(actor)
})

module.exports = router;
