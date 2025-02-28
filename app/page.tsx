export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://picsum.photos/200/300" alt="Blog 1" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold mt-4">Blog Post 1</h2>
          <p className="text-gray-600 mt-2">This is a short description of the first blog post.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://picsum.photos/200/300" alt="Blog 2" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold mt-4">Blog Post 2</h2>
          <p className="text-gray-600 mt-2">This is a short description of the second blog post.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="https://picsum.photos/200/300" alt="Blog 3" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-2xl font-semibold mt-4">Blog Post 3</h2>
          <p className="text-gray-600 mt-2">This is a short description of the third blog post.</p>
        </div>
      </div>
    </div>
  );
}
