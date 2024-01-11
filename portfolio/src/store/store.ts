import { create } from "zustand";

const data = {
  instagram: 'https://www.instagram.com/prsan_10?igsh=ODA1NTc5OTg5Nw==',
  leetcode: 'https://leetcode.com/PRASANNA_2024/',
  github: 'https://github.com/Prasanna2024/',
  linkedin: 'https://www.linkedin.com/in/prasanna-govindaraju-880634215/'
};

interface DataStruct {
  instagram: string;
  leetcode: string;
  github: string;
  linkedin: string;
}
interface projectLink{
    dynfilt:string,
    shopify:string,
    todolist:string,
    expenseTracker:string,
    recordmanager:string,
    orthotics:string
}
const project_data = {
    dynfilt:'https://654a152849b46f09c3a87435--iridescent-beijinho-54d5ed.netlify.app/',
    shopify:'https://inquisitive-druid-f30fdc.netlify.app/cart',
    todolist:'https://654b1925d159376cdc36fb53--playful-eclair-9440e7.netlify.app/',
    expenseTracker:'',
    recordmanager:'',
    orthotics:''
}
export interface PortfolioDataStructure {
  details: DataStruct;
  projectlink:projectLink,
  setDetails: (value: DataStruct) => void;
}

export const useStore = create<PortfolioDataStructure>((set) => ({
  details: data,
  projectlink:project_data,
  setDetails: (value: DataStruct) => set({ details: value })
}));
