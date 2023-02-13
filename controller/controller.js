const insert = require("../model/model");
const { getAllUsers } = require("../model/model");

exports.user = async (req, res) => {
  try {
    let response = await insert("users", req.body);
    return res.status(200).json({ message: "data Saved", data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.userData = async (req, res) => {
  try {
    let resp = await insert("userProfile", req.body);
    return res
      .status(200)
      .json({ status: "data saved in userProfile collection", data: resp });
  } catch (e) {
    console.log(e, "---error");
    res.status(500).json({ error: true, details: e.toString() });
  }
};

exports.userAge = async (req, res) => {
  try {
    let resp = await getAllUsers("userProfile", req.body);
    // let arr = [];
    // arr.push(resp[0].dob)
    // console.log(arr);
    return res
      .status(200)
      .json({ status: "data fetch from userProfile collection", data: resp });
    
  } catch (e) {
    console.log(e, "---error");
    res.status(500).json({ error: true, details: e.toString() });
  }
};
