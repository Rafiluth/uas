export default function UserCard({name, email, city, status}) {
    return(
        <div className="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
          <div className="user-info">
            <h2 className="text-base font-bold text-[16px] font-sans">{name}</h2>
            <p className="my-[2px] text-gray-600 font-sans">{email}</p>
            <div className="mt-1.5">
              <span className="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans mr-1.5">{city}</span>
            </div>
          </div>
        </div>
    );
}