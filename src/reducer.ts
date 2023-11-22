import { produce } from "immer";

export type Status = 'Online' | 'Pending' | 'Offline';

export interface Item {
    name: string;
    description: string;
    quantity: number;
    status: Status;
}

interface State {
    items: Item[];
    newItem: Item;
    searchTerm: string;
}

type Action =
    | { type: 'ADD_ITEM' }
    | { type: 'UPDATE_NEW_ITEM', payload: Item }
    | { type: 'UPDATE_SEARCH_TERM', payload: string };

export const initialState: State = {
    items: [
        {
            name: "Jira",
            description: "Project management tool for agile teams",
            quantity: 5,
            status: "Online",
        },
        {
            name: "Confluence",
            description: "Collaboration tool for teams to share knowledge efficiently",
            quantity: 3,
            status: "Online",
        },
        {
            name: "GitHub",
            description: "Platform for version control and collaboration",
            quantity: 8,
            status: "Pending",
        }
    ],
    newItem: {
        name: '',
        description: '',
        quantity: 0,
        status: 'Online'
    },
    searchTerm: '',
};

export const reducer = produce((draft: State, action: Action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            draft.items.push(draft.newItem);
            draft.newItem = { name: "", description: "", quantity: 0, status: "Online" };
            break;
        case 'UPDATE_NEW_ITEM':
            draft.newItem = action.payload;
            break;
        case 'UPDATE_SEARCH_TERM':
            draft.searchTerm = action.payload;
            break;
    }
}, initialState);
