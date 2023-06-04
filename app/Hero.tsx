import { Button } from '@/components/ui/button';
import Image from 'next/image'

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 container relative">
      <h2 className="hidden lg:flex lg:absolute top-10 left-0 uppercase font-extrabold text-slate-400 text-6xl -rotate-90 -translate-x-[100px] translate-y-[100px]">Nubia </h2>
      <div className="w-full container flex flex-col items-start justify-center text-black relative">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Your Partner in Financial Success</h1>

        <Button className="font-mono uppercase w-fit bg-black mt-3">Get a free consultation today!</Button>
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="w-full h-[400px] lg:w-[500px] lg:h-[500px]  relative overflow-hidden">
          <Image
            width="1280"
            height="1600"
            src="/images/people.jpg"
            alt="people"
            className="w-full object-cover grayscale"
          />
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            // width="1211pt"
            // height="1280pt"
            viewBox="0 0 1211 1280"
            className="w-full object-cover absolute inset-0"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="mask" x="0" y="0" width="100%" height="100%" />
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M5085 10690 c-172 -32 -252 -40 -444 -45 -330 -9 -349 -14 -711 -156
          l-185 -72 -171 -7 c-162 -6 -173 -8 -236 -37 -86 -40 -270 -164 -324 -218 -74
          -74 -118 -181 -155 -368 -15 -80 -49 -115 -181 -189 -247 -137 -293 -190 -478
          -551 -76 -149 -110 -226 -110 -249 0 -19 20 -103 45 -188 68 -231 62 -274 -60
          -469 -35 -57 -68 -120 -71 -139 -5 -23 0 -59 14 -106 12 -39 23 -108 26 -154
          6 -115 25 -142 169 -236 144 -94 194 -140 253 -229 85 -130 147 -198 319 -350
          200 -177 274 -233 321 -246 45 -13 58 -7 120 49 78 70 96 73 449 80 l310 6
          145 71 c167 82 223 103 300 110 81 7 133 -23 186 -107 23 -36 55 -85 70 -110
          65 -101 137 -114 274 -50 103 48 142 51 196 11 92 -67 96 -92 35 -213 -32 -63
          -45 -105 -56 -178 -9 -52 -24 -134 -35 -181 -27 -118 -22 -131 98 -254 54 -55
          112 -118 129 -140 44 -59 184 -285 201 -325 8 -19 18 -90 23 -157 8 -124 20
          -168 84 -322 38 -90 31 -113 -59 -209 -91 -98 -123 -151 -141 -238 -45 -211 2
          -404 166 -685 156 -267 181 -341 198 -575 6 -71 15 -144 20 -162 14 -47 54
          -113 127 -213 133 -180 183 -290 213 -473 28 -164 69 -234 165 -283 67 -34
          129 -34 231 0 110 36 174 46 371 57 102 5 191 16 224 26 116 35 229 107 351
          225 82 78 426 443 457 483 19 25 22 41 22 130 0 132 8 145 131 213 109 60 157
          105 169 159 11 48 8 69 -37 231 -36 131 -36 131 -19 176 44 116 173 235 316
          293 119 48 203 130 265 259 45 96 54 147 64 387 11 266 10 269 -62 365 -52 70
          -73 131 -97 276 -36 219 -25 273 78 382 32 33 103 116 157 185 189 236 356
          395 501 475 149 83 218 153 289 294 20 41 72 127 115 192 43 64 101 155 128
          203 57 99 132 313 139 398 5 54 4 59 -26 89 -31 31 -34 31 -99 26 -75 -6 -257
          -61 -432 -130 -73 -29 -146 -50 -200 -58 -136 -20 -170 2 -195 127 -26 122
          -65 183 -226 350 -144 149 -146 152 -222 300 -42 82 -106 196 -143 254 -36 58
          -88 150 -114 205 -26 55 -110 233 -186 395 -76 162 -163 334 -192 383 -29 48
          -89 154 -133 234 -93 169 -121 208 -163 230 -39 20 -123 20 -205 -1 -89 -23
          -106 -21 -148 19 -43 41 -43 41 -283 54 -169 8 -196 12 -305 46 -208 63 -278
          50 -426 -80 -96 -84 -139 -105 -215 -105 -80 0 -134 17 -295 94 -74 35 -182
          80 -241 99 -187 62 -348 156 -348 202 0 7 16 32 35 55 28 34 35 50 35 86 0
          112 -96 248 -192 272 -51 13 -54 13 -113 2z m2927 -4457 c28 -25 23 -81 -11
          -135 -83 -130 -158 -116 -149 28 4 60 7 70 36 95 37 34 94 39 124 12z"
                  />
                </g>
              </mask>
            </defs>
            <rect id="mask" x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </div>
    </section>
  );
};
export default Hero;
