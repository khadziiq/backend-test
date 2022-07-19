// import loadHomeland from "../homeland_model.js";
import fs from "fs";
const loadHomeland = JSON.parse(
  fs.readFileSync("shows_homeland.json", "utf-8")
);

export const getNameService = async (req, res) => {
  const { name } = req.params;

  try {
    const service = await loadHomeland.find((u) => u.id === 7);
    const episode = await service._embedded.episodes;
    const filterEp = await episode.find((data) => data.name === name);

    res
      .status(200)
      .json({ status: 200, message_status: "success", data: [filterEp] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
