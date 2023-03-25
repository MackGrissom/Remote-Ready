import React from 'react'

const Navbar = () => {
    return (
        <div className="navBar flex justify-between items-centere p-[3rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-[#FF5733]">
                    <strong> Remote</strong>Ready
                </h1>

            </div>

<div className="menu flex gap-8">
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Jobs </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Companies </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> About </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Contact </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Blog </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Login </li>
<li className="menuList text-[#6f6f6f] hover:text-orangeColor"> Register </li>

</div>
        </div>
    )
}

export default Navbar