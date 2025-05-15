"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById("cars-container");
function fetchCars() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://6821ba35259dad2655b061f7.mockapi.io/Cars");
            const data = yield res.json();
            renderCars(data);
        }
        catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    });
}
function renderCars(cars) {
    container.innerHTML = cars
        .map((car) => `
      <div class="app">
                <div class="erons">
                    <div>
                        <p class="op">${car.name}</p>
                        <p class="we">${car.model}</p>
                    </div>
                    <span class="span"><ion-icon name="heart-outline"></ion-icon></span>
                </div>
                <div class="img-url">
                    <img class="img-e" src="${car.img}" alt="">
                </div>
                <div class="Mirual">
                    <div class="gazs">
                        <img src="/assets/lonic/gas-station.png" alt="d">
                        <p class="azo">${car.gaz}</p>
                    </div>
                    <div class="gazs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                                fill="#90A3BF" />
                            <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                            <path
                                d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                                fill="#90A3BF" />
                            <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                            <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                            <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                            <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                        </svg>
                        <p class="azo">Manual</p>
                    </div>
                    <div class="gazs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                                fill="#90A3BF" />
                            <path
                                d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
                                fill="#90A3BF" />
                            <path
                                d="M19.9901 7.34001C20.1501 9.28001 18.7701 10.98 16.8601 11.21C16.8501 11.21 16.8501 11.21 16.8401 11.21H16.8101C16.7501 11.21 16.6901 11.21 16.6401 11.23C15.6701 11.28 14.7801 10.97 14.1101 10.4C15.1401 9.48001 15.7301 8.10001 15.6101 6.60001C15.5401 5.79001 15.2601 5.05001 14.8401 4.42001C15.2201 4.23001 15.6601 4.11001 16.1101 4.07001C18.0701 3.90001 19.8201 5.36001 19.9901 7.34001Z"
                                fill="#90A3BF" />
                            <path
                                d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z"
                                fill="#90A3BF" />
                        </svg>
                        <p class="azo">${car.person}</p>
                    </div>
                </div>
                <div class="nerx">
                     <span class="money">${car.narx}<span class="days">day</span></span>
                     <button class="btn-2">Rent Now</button>
                </div>
            </div>
    `)
        .join("");
}
fetchCars();
const container1 = document.getElementById("cars-allcontainer");
function fetching() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rers = yield fetch("https://6821ba35259dad2655b061f7.mockapi.io/All-cars");
            const datas = yield rers.json();
            renderCarss(datas);
        }
        catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    });
}
function renderCarss(cari) {
    container1.innerHTML = cari
        .map((car) => `
      <div class="app">
                <div class="erons">
                    <div>
                        <p class="op">${car.name}</p>
                        <p class="we">${car.model}</p>
                    </div>
                    <span class="span"><ion-icon name="heart-outline"></ion-icon></span>
                </div>
                <div class="img-urls">
                    <img class="img-e" src="${car.img}" alt="">
                </div>
                <div class="Mirual">
                    <div class="gazs">
                        <img src="/assets/lonic/gas-station.png" alt="d">
                        <p class="azo">${car.gaz}</p>
                    </div>
                    <div class="gazs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                                fill="#90A3BF" />
                            <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                            <path
                                d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                                fill="#90A3BF" />
                            <rect x="8" y="8" width="8" height="8" rx="4" fill="white" />
                            <rect x="11" y="17" width="2" height="4" fill="#90A3BF" />
                            <rect x="17" y="11" width="4" height="2" fill="#90A3BF" />
                            <rect x="3" y="11" width="4" height="2" fill="#90A3BF" />
                        </svg>
                        <p class="azo">Manual</p>
                    </div>
                    <div class="gazs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                                fill="#90A3BF" />
                            <path
                                d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
                                fill="#90A3BF" />
                            <path
                                d="M19.9901 7.34001C20.1501 9.28001 18.7701 10.98 16.8601 11.21C16.8501 11.21 16.8501 11.21 16.8401 11.21H16.8101C16.7501 11.21 16.6901 11.21 16.6401 11.23C15.6701 11.28 14.7801 10.97 14.1101 10.4C15.1401 9.48001 15.7301 8.10001 15.6101 6.60001C15.5401 5.79001 15.2601 5.05001 14.8401 4.42001C15.2201 4.23001 15.6601 4.11001 16.1101 4.07001C18.0701 3.90001 19.8201 5.36001 19.9901 7.34001Z"
                                fill="#90A3BF" />
                            <path
                                d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z"
                                fill="#90A3BF" />
                        </svg>
                        <p class="azo">${car.person}</p>
                    </div>
                </div>
                <div class="nerx">
                     <span class="money">${car.narx}<span class="days">day</span></span>
                     <button class="btn-2">Rent Now</button>
                </div>
            </div>
    `)
        .join("");
}
fetching();
