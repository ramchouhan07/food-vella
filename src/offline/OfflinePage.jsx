
const OfflinPage = ()=>{

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          {/* Offline Banner */}
          <div className="absolute top-0 left-0 w-full bg-red-600 text-white text-center py-2 font-bold">
            You are currently offline. Check your connection.
          </div>
    
          {/* Main UI */}
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">WELL COME TO MY FOOD APP</h1>
            <p className="text-gray-700">
              The current network status is{" "}
              <span className="font-bold text-green-600">Offline</span>
            </p>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Explore Features
            </button>
          </div>
        </div>
      );
}
export default OfflinPage;