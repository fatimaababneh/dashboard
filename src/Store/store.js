import {create} from 'zustand'

export const useStore = create((set)=> ({

    modalOpen : false,
    toggleModel: ()=> set((state)=> ({modalOpen: !state.modalOpen })),

}))