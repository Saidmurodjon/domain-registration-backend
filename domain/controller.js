const whoisinfo = require("whois-json");

const db = require("../data/DB");

async function Post(req, res) {
  try {
    const domain = req.body.domain;
    const results = await whoisinfo(domain);
    if (results) {
      return res.status(200).send(results);
    }else{
      return res.status(404).send({message:"this domain not found"});
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  Post,
};
