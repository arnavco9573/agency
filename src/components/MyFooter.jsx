import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import React from 'react'

const MyFooter = () => {
    return (
        <Footer container className='bg-[#263238] text-neutralSilver'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='img space-y-4 mb-8'>
                        <a href="/" className='w-full inline-block items-center text-2xl font-semibold space-x-3'><span className='text-neutralSilver'>Logo</span></a>
                        <div>
                            <p className='mb-1'>Copyright © 2024 company name.</p>
                            <p>All rights Reserved</p>
                        </div>

                    </div >
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-neutralSilver">
                        <div className='text-neutralSilver'>
                            <Footer.Title title="Company" className='text-neutralSilver' />
                            <Footer.LinkGroup col className='text-neutralSilver'>
                                <Footer.Link href="#">About us</Footer.Link>
                                <Footer.Link href="#">Blog</Footer.Link>
                                <Footer.Link href="#">Contact us</Footer.Link>
                                <Footer.Link href="#">Pricing</Footer.Link>
                                <Footer.Link href="#">Testimonials</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Support" className='text-neutralSilver' />
                            <Footer.LinkGroup col className='text-neutralSilver'>
                                <Footer.Link href="#">Help center</Footer.Link>
                                <Footer.Link href="#">Terms of service</Footer.Link>
                                <Footer.Link href="#">Legal</Footer.Link>
                                <Footer.Link href="#">Privacy policy</Footer.Link>
                                <Footer.Link href="#">Status</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className='text-neutralSilver' />
                            <Footer.LinkGroup col className='text-neutralSilver'>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between text-neutralSilver">
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-neutralSilver">
                        <Footer.Icon href="#" icon={BsFacebook} className='text-neutralSilver' />
                        <Footer.Icon href="#" icon={BsInstagram} className='text-neutralSilver' />
                        <Footer.Icon href="#" icon={BsTwitter} className='text-neutralSilver' />
                        <Footer.Icon href="#" icon={BsGithub} className='text-neutralSilver' />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default MyFooter