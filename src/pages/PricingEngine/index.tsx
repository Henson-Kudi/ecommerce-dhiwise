import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PricingEnginePage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_4.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-[70px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-9 items-center justify-start my-0 pt-1.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32Bluegray900"
                >
                  Best Sellers in Electronics
                </Text>
                <Img
                  className="h-10 w-10"
                  src="images/img_clock.svg"
                  alt="clock"
                />
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_194X248.png"
                      alt="pngwingOne"
                    />
                    <Text
                      className="capitalize mt-[13px] text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="mt-[23px] text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      boAt Airdopes 131
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mt-1.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1.svg"
                          alt="StarOne"
                        />
                        <Text
                          className="mt-0.5 text-amber-500 text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="lg"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_1.png"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="capitalize mt-[13px] text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="mt-[23px] text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      HP Envy 13 x360
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mt-1.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_12X12.svg"
                          alt="StarOne One"
                        />
                        <Text
                          className="mt-0.5 text-amber-500 text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="lg"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_2.png"
                      alt="pngwingOne Two"
                    />
                    <Text
                      className="capitalize mt-[13px] text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="mt-5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      OnePlus 10R 5G
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mt-1.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_1.svg"
                          alt="StarOne Two"
                        />
                        <Text
                          className="mt-0.5 text-amber-500 text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="lg"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_3.png"
                      alt="pngwingOne Three"
                    />
                    <Text
                      className="capitalize mt-[13px] text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="mt-5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      APPLE iPad
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[15px] py-[7px] w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mt-1.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_2.svg"
                          alt="StarOne Three"
                        />
                        <Text
                          className="mt-0.5 text-amber-500 text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="lg"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-9 items-center justify-end my-0 pt-1.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32Bluegray900"
                >
                  Best Sellers in Electronics
                </Text>
                <Img
                  className="h-10 w-10"
                  src="images/img_clock.svg"
                  alt="clock One"
                />
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_194X248.png"
                      alt="pngwingOne One"
                    />
                    <Text
                      className="capitalize mt-3 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="mt-3.5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      boAt Airdopes 131
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mb-[3px] mt-2.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_3.svg"
                          alt="StarOne One"
                        />
                        <Text
                          className="text-amber-500 text-right text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_1.png"
                      alt="pngwingOne One One"
                    />
                    <Text
                      className="capitalize mt-3 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="mt-3.5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      HP Envy 13 x360
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mb-[3px] mt-2.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_4.svg"
                          alt="StarOne One One"
                        />
                        <Text
                          className="text-amber-500 text-right text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_2.png"
                      alt="pngwingOne Two One"
                    />
                    <Text
                      className="capitalize mt-3 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Amazone
                    </Text>
                    <Text
                      className="mt-3.5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      OnePlus 10R 5G
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mb-[3px] mt-2.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_5.svg"
                          alt="StarOne Two One"
                        />
                        <Text
                          className="text-amber-500 text-right text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[194px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_pngwing1_3.png"
                      alt="pngwingOne Three One"
                    />
                    <Text
                      className="capitalize mt-3 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      TataCLiQ
                    </Text>
                    <Text
                      className="mt-3.5 text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                      size="txtGilroyMedium24Black90002"
                    >
                      APPLE iPad
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
                      <div className="flex flex-row gap-4 items-end justify-between w-[52%]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
                          size="txtGilroyMedium24Black90002"
                        >
                          <span className="text-colors font-gilroy text-left font-medium">
                            $
                          </span>
                          <span className="text-colors10 font-gilroy text-left font-medium">
                            49.99
                          </span>
                        </Text>
                        <Text
                          className="line-through mb-[3px] mt-2.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          $99.99
                        </Text>
                      </div>
                      <div className="border border-amber-500 border-solid flex flex-row font-opensans items-center justify-evenly p-0.5 rounded-[3px] w-[14%]">
                        <Img
                          className="h-3 my-[3px] w-3"
                          src="images/img_star1_6.svg"
                          alt="StarOne Three One"
                        />
                        <Text
                          className="text-amber-500 text-right text-sm"
                          size="txtOpenSansMedium14"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold mt-2 rounded-md text-base text-center w-[248px]"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default PricingEnginePage;
