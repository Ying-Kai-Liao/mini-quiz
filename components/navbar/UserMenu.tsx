'use client';

const UserMenu = () => {
  //把這個連結換成你要的
  const handleButtonClick = () => {
    window.open('https://google.com', '_self')
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => handleButtonClick()}
          className="
            hidden
            md:block
            text-md 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          返回
        </div>
      </div>
    </div>
  );
}

export default UserMenu;