const getAllUsers = (req, res) => {
  res.json({
    message: "GET user success",
    data: req.body,
  });
};

const postUsers = async (req, res) => {
  //     let { username, name } = req.body

  //     const result = await

  //   console.log(req.headers);

  res.status(200).send({
    message: "POST user success",
    data: req.body,
  });
};

module.exports = {
  getAllUsers,
  postUsers,
};
