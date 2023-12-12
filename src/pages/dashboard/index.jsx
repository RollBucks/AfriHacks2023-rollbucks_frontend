import {
    Avatar,
    Box,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "../../assets/img/dashboards/usa.png";
// Custom components
import MiniStatistics from "../../components/card/MiniStatistics";
import IconBox from "../../components/icons/IconBox";
import React from "react";
import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
    MdLogout
} from "react-icons/md";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import {
    columnsDataCheck,
    columnsDataComplex,
} from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

import logo from '../../assets/icons/logo.svg'

export default function Dashboard() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
        <div>
            <nav className='font-body flex items-center text-sm justify-between px-[32px] py-[20px] border-b-[2px] border-white-500 bg-white-400 z-[1000] fixed w-full'>
                <img src={logo} alt='logo icon' width={'102px'} />
                <div className='flex items-center space-x-4'>
                    <p className='text-black-400'>Ofure Ehiremhen</p>
                    <Avatar size='sm' />
                    <Icon as={MdLogout} color={brandColor} w='24px' h='24px' />
                </div>
            </nav>
            <h1 className="pt-[100px] px-40 text-3xl font-bold ">Welcome back, Ofure! <span className="text-4xl">👋</span></h1>
            <p className="px-40 pt-[10px] text-lg font-light font-body text-gray-500">Here's what's up with your contracts today.</p>
            <Box pt={{ base: "130px", md: "80px", xl: "80px" }} className="px-40">
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 2, "2xl": 6 }}
                    gap='20px'
                    mb='20px'>
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='56px'
                                h='56px'
                                bg={boxBg}
                                icon={
                                    <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
                                }
                            />
                        }
                        name='Monthly Expenses'
                        value='$10,420.39'
                    />
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='56px'
                                h='56px'
                                bg={boxBg}
                                icon={
                                    <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
                                }
                            />
                        }
                        name='Total Open Contracts'
                        value='5'
                    />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
                    <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
                    <DailyTraffic />
                    <ComplexTable
                        columnsData={columnsDataComplex}
                        tableData={tableDataComplex}
                    />
                </SimpleGrid>
            </Box>
        </div>
    );
}
