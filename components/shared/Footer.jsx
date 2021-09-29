import React from "react";
import { Linkedin , GitHub, Twitter,Instagram,Facebook } from 'react-feather';

const Footer = () => {
	return <footer>
		<div class="w-full bg-primary">
		<div class="grid grid-cols-11 gap-4 place-items-center">
		<div class="col-start-1 col-end-12 text-center md:col-start-1 md:col-end-3 ">
		<div class="flex">
    <div class="flex-shrink-0">
		<img class="mx-auto pt-1" src="/concepto.png" alt="" height="74"width="291" ></img>
		</div>
		</div>
		</div>
		<div class="col-start-1 col-end-12 text-center ml-4 md:col-start-9 md:col-end-12 ">
			<div class=" pt-6 ">
			<button class=" mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://www.linkedin.com/company/ieeesrmist/">
			<Linkedin />
			</a>
			</button>
			<button class="mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://github.com/IEEE-SRM-Student-Branch">
			<GitHub />
			</a>
			</button>
			<button class="mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://twitter.com/ieeesrmist">
			<Twitter />
			</a>
			</button>
			<button class="mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://www.instagram.com/ieeesrmist/">
			<Instagram />
			</a>
			</button>
			<button class="mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://www.facebook.com/ieeesrmist">
			<Facebook />
			</a>
			</button>
			<button class="mr-4 inline-block w-6 h-6 bg-secondary hover:bg-tertiary">
			<a href="https://www.facebook.com/ieeesrmist">
			<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1V16L13 18H21L19 16V3L21 1H15ZM15 1L11 12M3 16L5 18H1L3 16ZM3 16V5M11 12L6 1H1L3 5M11 12L9 18L3 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

			</a>
			</button>
			
			</div>
		
			</div>
			
		</div>
		
		<div class="pt-6 grid grid-cols-9 gap-4">
		<div class="col-start-1 col-end-10 px-5 md:px-20 md:col-start-1 md:col-end-7">
		<div class="text-xm  font-sans font-normal text-center md:text-left text-secondary">IEEE SRM is a prolific student chapter that aims to inspire professionalism and empower students, help them learn and implement new skills and technologies, gain exemplary knowledge through various engaging workshops and webinars, experience in fields of interest.
</div>
</div>
<div class="col-start-1 col-end-10 md:col-start-7 md:col-end-10 text-center md:text-right md:pr-6">
<a href="https://www.ieeesrmist.in/disclaimer">
<button class="  font-sans font-normal  text-secondary hover:text-tertiary">Disclaimer</button>
</a><br />
<a href="https://www.ieeesrmist.in/codeofconduct">
<button class="  font-sans font-normal  text-secondary hover:text-tertiary">Code of Conduct</button>
</a><br />
<a href="https://www.ieeesrmist.in/privacypolicy">
<button class="  font-sans font-normal  text-secondary hover:text-tertiary">Privacy Policy</button>
</a>
<br />
</div>

</div>
<div class="p-4 pt-10 text-center text-tertiary">© 2021 Made with ❤️️ by IEEE SRM SB</div>
</div>	
	</footer>;
};

export default Footer;
