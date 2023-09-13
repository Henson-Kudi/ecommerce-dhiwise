import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AdvancedSearchPage: React.FC = () => {
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_05 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] md:ml-[0] ml-[43px] w-[65%]"
                src="images/img_group10392_35X162.svg"
                alt="Group10392"
              />
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-[20.8px] mt-12 w-full"
              >
                {[...Array(7)].map((item, index) => (
                  <AccordionItem uuid={index} key={Math.random()}>
                    <div className="flex flex-col gap-3 justify-start w-full">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {({ expanded }) => (
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="mt-[5px] text-base text-blue_gray-700"
                                  size="txtGilroySemiBold16"
                                >
                                  Categories
                                </Text>
                                {expanded && (
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_arrowup_black_900.svg"
                                    alt="arrowup"
                                  />
                                )}
                                {!expanded && (
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_arrowdown_bluegray_700.svg"
                                    alt="arrowdown"
                                  />
                                )}
                              </div>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="w-full ">
                        <div className="flex flex-col gap-[17px] items-start justify-start ml-4 md:ml-[0]">
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtGilroySemiBold14Bluegray700"
                          >
                            Kids Footwear
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtGilroySemiBold14Bluegray700"
                          >
                            Womens Footwear
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtGilroySemiBold14Bluegray700"
                          >
                            Mens Footwear
                          </Text>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[492px] w-[27%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_question.svg"
                  alt="question"
                />
                <Text
                  className="mt-[5px] text-base text-blue_gray-700"
                  size="txtOpenSansRomanSemiBold16"
                >
                  Help
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-8 w-full">
            <header className="flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Input
                  name="Group10270"
                  placeholder="Search"
                  value={group10270value}
                  onChange={(e) => setGroup10270value(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:mt-0 my-0.5 rounded-lg w-[46%] md:w-full"
                  suffix={
                    group10270value?.length > 0 ? (
                      <CloseSVG
                        className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                        onClick={() => setGroup10270value("")}
                        fillColor="#bac1ce"
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    ) : (
                      <Img
                        className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    )
                  }
                  shape="round"
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[446px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </header>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[96%]"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start p-[11px] rounded-[12px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4561.png')" }}
                >
                  <Button
                    className="flex h-[45px] items-center justify-center mb-[141px] rounded-[6.1px] w-[45px]"
                    size="sm"
                    variant="gradient"
                    color="white_A700_white_A700_66"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                  <Text
                    className="leading-[33.55px] sm:text-[17.35px] md:text-[19.35px] text-[21.35px] text-blue_gray-800 w-full"
                    size="txtUrbanistRegular2135"
                  >
                    Nike sports running shoes for men
                  </Text>
                  <Text
                    className="sm:text-[20.4px] md:text-[22.4px] text-[24.4px] text-green-600_02"
                    size="txtLatoRegular244"
                  >
                    <span className="text-colors5 font-urbanist text-left font-semibold">
                      $10
                    </span>
                    <span className="text-colors6 font-lato text-left font-normal">
                      {" "}
                    </span>
                    <span className="md:text-[19.35px] sm:text-[17.35px] text-colors7 font-urbanist text-left text-[21.35px] font-medium line-through">
                      $13
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start p-[11px] rounded-[12px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4562.png')" }}
                >
                  <Button
                    className="flex h-[45px] items-center justify-center mb-[141px] rounded-[6.1px] w-[45px]"
                    size="sm"
                    variant="gradient"
                    color="white_A700_white_A700_66"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_favorite.svg"
                      alt="favorite One"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                  <Text
                    className="leading-[33.55px] sm:text-[17.35px] md:text-[19.35px] text-[21.35px] text-blue_gray-800 w-full"
                    size="txtUrbanistRegular2135"
                  >
                    Nike sneakers shoes for men
                  </Text>
                  <Text
                    className="sm:text-[20.4px] md:text-[22.4px] text-[24.4px] text-green-600_02"
                    size="txtLatoRegular244"
                  >
                    <span className="text-colors5 font-urbanist text-left font-semibold">
                      $10
                    </span>
                    <span className="text-colors6 font-lato text-left font-normal">
                      {" "}
                    </span>
                    <span className="md:text-[19.35px] sm:text-[17.35px] text-colors7 font-urbanist text-left text-[21.35px] font-medium line-through">
                      $13
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start p-[11px] rounded-[12px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4563.png')" }}
                >
                  <Button
                    className="flex h-[45px] items-center justify-center mb-[141px] rounded-[6.1px] w-[45px]"
                    size="sm"
                    variant="gradient"
                    color="white_A700_white_A700_66"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_favorite.svg"
                      alt="favorite Two"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                  <Text
                    className="leading-[33.55px] sm:text-[17.35px] md:text-[19.35px] text-[21.35px] text-blue_gray-800 w-full"
                    size="txtUrbanistRegular2135"
                  >
                    Nike sneakers shoes for men
                  </Text>
                  <Text
                    className="sm:text-[20.4px] md:text-[22.4px] text-[24.4px] text-green-600_02"
                    size="txtLatoRegular244"
                  >
                    <span className="text-colors5 font-urbanist text-left font-semibold">
                      $10
                    </span>
                    <span className="text-colors6 font-lato text-left font-normal">
                      {" "}
                    </span>
                    <span className="md:text-[19.35px] sm:text-[17.35px] text-colors7 font-urbanist text-left text-[21.35px] font-medium line-through">
                      $13
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start p-[11px] rounded-[12px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[199px] items-end justify-start p-1.5 rounded-[6.1px] w-[99%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group4564.png')" }}
                >
                  <Button
                    className="flex h-[45px] items-center justify-center mb-[141px] rounded-[6.1px] w-[45px]"
                    size="sm"
                    variant="gradient"
                    color="white_A700_white_A700_66"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_favorite.svg"
                      alt="favorite Three"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start mb-2">
                  <Text
                    className="leading-[33.55px] sm:text-[17.35px] md:text-[19.35px] text-[21.35px] text-blue_gray-800 w-full"
                    size="txtUrbanistRegular2135"
                  >
                    Nike sports running shoes for men
                  </Text>
                  <Text
                    className="sm:text-[20.4px] md:text-[22.4px] text-[24.4px] text-green-600_02"
                    size="txtLatoRegular244"
                  >
                    <span className="text-colors5 font-urbanist text-left font-semibold">
                      $10
                    </span>
                    <span className="text-colors6 font-lato text-left font-normal">
                      {" "}
                    </span>
                    <span className="md:text-[19.35px] sm:text-[17.35px] text-colors7 font-urbanist text-left text-[21.35px] font-medium line-through">
                      $13
                    </span>
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearchPage;
