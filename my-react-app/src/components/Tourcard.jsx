import Button from "./Button";

function Tourcard({ image, title, price }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition hover:-translate-y-1">
      {/* Ảnh tour */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Nội dung */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>

        {price && (
          <p className="text-blue-600 font-semibold mt-2">
            {price}
          </p>
        )}

        {/* Nút */}
        <div className="flex justify-between gap-3 mt-4">
          <Button label="Xem thêm" />
          <Button label="Đặt tour" />
        </div>
      </div>
    </div>
  );
}

export default Tourcard;
