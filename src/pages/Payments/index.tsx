import React from "react";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PaymentsPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[54px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_5.svg"
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
                    src="images/img_arrowdown.svg"
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
                    src="images/img_arrowdown.svg"
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
        <div className="flex sm:h-[1010px] h-[1011px] md:h-[1635px] justify-end max-w-[1120px] mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 h-[709px] mb-16 mt-auto mx-auto rounded-bl-md rounded-br-md shadow-bs w-[95%]"></div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-white-A700 flex flex-col gap-[27px] items-center justify-start p-[26px] sm:px-5 rounded-md shadow-bs w-full">
              <div className="flex flex-col gap-4 items-center justify-start pt-[13px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtGilroySemiBold32Bluegray900"
                  >
                    Payments
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-medium text-base text-gray-900 text-left w-[11%] sm:w-full"
                    placeholderClassName="text-gray-900"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="Frame9870"
                    options={frame9870OptionsList}
                    isSearchable={false}
                    placeholder="Filter & Sort"
                    size="xs"
                  />
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start mb-3 w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex flex-row gap-6 items-start justify-start w-[28%] md:w-full">
                    <Text
                      className="mt-0.5 text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Available Balance :
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                      size="txtGilroyBold24BlueA700"
                    >
                      $2,145.00
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue-50 flex flex-row md:gap-10 items-center justify-between p-[13px] rounded-tl-md rounded-tr-md w-full">
                        <Text
                          className="ml-2.5 text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18Bluegray900"
                        >
                          Recent Transactions
                        </Text>
                        <a
                          href="javascript:"
                          className="mr-2.5 text-blue-A700 text-lg"
                        >
                          <Text size="txtGilroyBold18">View All</Text>
                        </a>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-6 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[736px] text-base text-red-700"
                            size="txtGilroySemiBold16Red700"
                          >
                            -$20.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright One"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Two"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Three"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Four"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Five"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] text-base text-green-600"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Six"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pt-[5px] w-[96%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-blue_gray-900 text-center"
                              size="txtGilroyMedium16Bluegray900"
                            >
                              Sent to Angelyn Weiner
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-400 text-center text-sm"
                              size="txtGilroyRegular14Bluegray400"
                            >
                              29 Jan, 06:32 pm
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[738px] md:mt-0 mt-1.5 text-base text-green-600 text-right"
                            size="txtGilroySemiBold16Green600"
                          >
                            +120.00
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-2 w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright Seven"
                          />
                        </div>
                        <Line className="bg-blue_gray-100 h-px w-full" />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
