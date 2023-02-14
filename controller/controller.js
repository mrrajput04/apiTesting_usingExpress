const { insert, getUsers, getAllUser } = require("../model/model");

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

exports.getUser = async (req, res) => {
  try {
    let resp = await getUsers("userProfile", req.body);
    return res
      .status(200)
      .json({ status: "data fetch from userProfile collection", data: resp });
  } catch (e) {
    console.log(e, "---error");
    res.status(500).json({ error: true, details: e.toString() });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    let arr = [];
    let result = await (await getAllUser("userProfile")).find().toArray();
    result.forEach((element) => {
      function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
      }
      let x = calculate_age(new Date(element.dob));
      arr.push(x);
    });
    console.log(arr);
    let average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    console.log(average);

    return res.status(200).json({
      status: "data fetch successfully from userProfile ",
      average_age: average,
    });
  } catch (e) {
    res.status(500).json({ error: true, details: e.toString() });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let arr = [];

    let result = await (await getAllUser("userProfile")).find().toArray();
    // console.log(result);
    result.forEach((element) => {
      function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
      }
      let x = calculate_age(new Date(element.dob));
      arr.push({ age: x, id: element._id });
    });    
    function checkAge(a) {
      return a.age > 25;
    }
    let age = arr.filter(checkAge);
    age = age.map((i) => i.id);
    const obj = {...age}
    console.log(obj,"=====>");
    result = await (
      await getAllUser("userProfile")
    ).deleteMany({obj});
    console.log(result, "===>");

    return res.status(200).json({
      status: "data deleted successfully from userProfile ",
      data: result,
    });
  } catch (e) {
    res.status(500).json({ error: true, details: e.toString() });
  }
};
