const { prisma } = require("../constats/config.js");
const { DateTime } = require("luxon");

const categories_get = async (req, res) => {
  if (req.session.userId) {
    let ctgs;
    try {
      ctgs = await prisma.transactionCategory
        .findMany()
        .catch(() => console.log("err"));

      if (ctgs) res.status(200).send(ctgs);
    } catch {
      res.status(400).send("error");
    }
  } else res.status(401).send("please login");
};

const categories_transaction_sum = async (req, res) => {
  if (req.session.userId) {
    let firstDate = req.query.first;
    let lastDate = DateTime.now().toISO();

    if (!firstDate) {
      firstDate = DateTime.now().minus({ month: 1 }).toISO();
    }

    try {
      const categories = await prisma.transactionCategory.findMany({
        where: {
          wallet: {
            userId: req.session.userId
          },
          date: {
            gte: firstDate,
            lt: lastDate,
          },
        }
      })
      const tr = await prisma.transaction.findMany({
        where: {
          wallet: {
            userId: req.session.userId
          },
          date: {
            gte: firstDate,
            lt: lastDate,
          },
        }
      })
      for (let category of categories) category.sum = 0
      for(let transaction of tr) {
       
      }
      res.send();
    } catch (err){
      console.log(err)
      res.status(400).send("Err");
    }
  }
};

module.exports = {
  categories_get,
  categories_transaction_sum,
};
