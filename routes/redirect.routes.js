import { Router } from "express";
import Link from "../models/Link.js";

const router = Router();

router.get("/:code", async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });
    if (link) {
      link.clicks++;
      await link.save();
      return res.redirect(link.from);
    }
    res.status(404).json("ссылка не найдена");
  } catch (err) {
    res.status(500).json("что-то пошло не такб попробуйте еще раз");
  }
});

export default router;
