import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    const products = await Product.find();
    const shoulderbag = {};

    products.forEach((item) => {
      if (!shoulderbag[item.title]) {
        shoulderbag[item.title] = {
          ...item.toObject(),
          color: [],
          size: [],
        };
      }

      if (item.availableQty > 0) {
        if (!shoulderbag[item.title].color.includes(item.color)) {
          shoulderbag[item.title].color.push(item.color);
        }
        if (!shoulderbag[item.title].size.includes(item.size)) {
          shoulderbag[item.title].size.push(item.size);
        }
      }
    });

    res.status(200).json({ shoulderbag });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);

// If above code doesn't work, try this one

// import Product from "@/models/Product";
// import connectDB from "@/middleware/mongoose";

// const handler = async (req, res) => {
//   let products = await Product.find();
//   let shoulderbag = {};
//   for (let item of products) {
//     if (item.title in shoulderbag) {
//       if (
//         !shoulderbag[item.title].color.includes(item.color) &&
//         item.availableQty > 0
//       ) {
//         shoulderbag[item.title].color.push(item.color);
//       }
//       if (
//         !shoulderbag[item.title].size.includes(item.size) &&
//         item.availableQty > 0
//       ) {
//         shoulderbag[item.title].size.push(item.size);
//       }
//     } else {
//       shoulderbag[item.title] = JSON.parse(JSON.stringify(item));
//       if (item.availableQty > 0) {
//         shoulderbag[item.title].color = [item.color];
//         shoulderbag[item.title].size = [item.size];
//       } else {
//         shoulderbag[item.title].color = [];
//         shoulderbag[item.title].size = [];
//       }
//     }
//   }
//   res.status(200).json({ shoulderbag });
// };

// export default connectDB(handler);
