export const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen text-white text-shadow">
        <h1 className="text-9xl flicker">箱</h1>
        <p className="text-base fade-in">coming soon</p>
      </div>
      <div
        className="fade-in2 h-screen w-screen -z-10 fixed top-0 left-0"
        style={{
          background:
            'radial-gradient(200% 200% at 50% 50%, #222 0%, #000 100%)',
        }}
      ></div>
    </>
  )
}
