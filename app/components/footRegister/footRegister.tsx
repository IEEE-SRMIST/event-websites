import React from 'react';

const FootRegister = () => {
  return (
    <section>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <div className="flex items-center justify-between space-x-4">
                <img
                    src="/images/characters/lucia.jpg"
                    alt="Lucia"
                    className="w-16 h-16 rounded-full"
                />
                <div className="flex-grow text-left px-4">
                    <p className="text-sm text-gray-500">Lucia</p>
                    <p className="">Have more questions? Contact us at:</p>
                    <a className="text-sm text-neonCyan" href='mailto:ieeesrmist@srmist.edu.in'>ieeesrmist@srmist.edu.in</a>
                </div>
                <a
                    href="https://registrations.ieeesrmist.com/"
                    className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-neonCyan text-neutral-800 px-4 py-2 transition-transform transform hover:scale-105 focus:scale-105"
                >
                    Register
                </a>
            </div>
        </div>
    </section>
  );
}

export default FootRegister;
