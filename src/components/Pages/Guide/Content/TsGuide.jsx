import React from "react";
import {
    Background,
    Controls,
    ReactFlow,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FiDownload } from "react-icons/fi";

const initialNodes = [
    {
        id: "1",
        position: { x: 480, y: 20 },
        data: { label: "TypeScript Roadmap", icon: "📚" },
    },

    // Day 1: Introduction to TypeScript (Left)
    {
        id: "2",
        position: { x: 240, y: 100 },
        data: { label: "Day 1: Introduction to TypeScript", icon: "🌅" },
    },
    {
        id: "3",
        position: { x: 100, y: 200 },
        data: { label: "What is TypeScript?", icon: "📝" },
    },
    {
        id: "4",
        position: { x: 400, y: 200 },
        data: { label: "TypeScript vs JavaScript", icon: "📑" },
    },

    // Day 2: Setting Up TypeScript (Right)
    {
        id: "5",
        position: { x: 720, y: 100 },
        data: { label: "Day 2: Setting Up TypeScript", icon: "🔧" },
    },
    {
        id: "6",
        position: { x: 600, y: 200 },
        data: { label: "Installing TypeScript", icon: "📦" },
    },
    {
        id: "7",
        position: { x: 840, y: 200 },
        data: { label: "Configuring tsconfig.json", icon: "⚙️" },
    },

    // Day 3: Basic Types (Left)
    {
        id: "8",
        position: { x: 240, y: 300 },
        data: { label: "Day 3: Basic Types", icon: "🔠" },
    },
    {
        id: "9",
        position: { x: 100, y: 400 },
        data: { label: "String, Number, Boolean", icon: "🔢" },
    },
    {
        id: "10",
        position: { x: 400, y: 400 },
        data: { label: "Arrays and Tuples", icon: "📊" },
    },

    // Day 4: Functions (Right)
    {
        id: "11",
        position: { x: 720, y: 300 },
        data: { label: "Day 4: Functions", icon: "🛠️" },
    },
    {
        id: "12",
        position: { x: 600, y: 400 },
        data: { label: "Function Types", icon: "🔍" },
    },
    {
        id: "13",
        position: { x: 840, y: 400 },
        data: { label: "Optional & Default Parameters", icon: "⚖️" },
    },

    // Day 5: Interfaces (Left)
    {
        id: "14",
        position: { x: 240, y: 500 },
        data: { label: "Day 5: Interfaces", icon: "📃" },
    },
    {
        id: "15",
        position: { x: 100, y: 600 },
        data: { label: "Defining Interfaces", icon: "📄" },
    },
    {
        id: "16",
        position: { x: 400, y: 600 },
        data: { label: "Extending Interfaces", icon: "🔗" },
    },

    // Day 6: Classes (Right)
    {
        id: "17",
        position: { x: 720, y: 500 },
        data: { label: "Day 6: Classes", icon: "🏛️" },
    },
    {
        id: "18",
        position: { x: 600, y: 600 },
        data: { label: "Class Syntax", icon: "📖" },
    },
    {
        id: "19",
        position: { x: 840, y: 600 },
        data: { label: "Inheritance", icon: "🔄" },
    },

    // Day 7: Generics (Left)
    {
        id: "20",
        position: { x: 240, y: 700 },
        data: { label: "Day 7: Generics", icon: "🔤" },
    },
    {
        id: "21",
        position: { x: 100, y: 800 },
        data: { label: "Generic Functions", icon: "🔧" },
    },
    {
        id: "22",
        position: { x: 400, y: 800 },
        data: { label: "Generic Interfaces", icon: "📜" },
    },

    // Day 8: Modules (Right)
    {
        id: "23",
        position: { x: 720, y: 700 },
        data: { label: "Day 8: Modules", icon: "📦" },
    },

    // Day 9: Type Assertions (Left)
    {
        id: "24",
        position: { x: 240, y: 900 },
        data: { label: "Day 9: Type Assertions", icon: "🔍" },
    },
    {
        id: "25",
        position: { x: 100, y: 1000 },
        data: { label: "As Keyword", icon: "⚙️" },
    },
    {
        id: "26",
        position: { x: 400, y: 1000 },
        data: { label: "Angle Bracket Syntax", icon: "🔧" },
    },

    // Day 10: Advanced Types (Right)
    {
        id: "27",
        position: { x: 720, y: 900 },
        data: { label: "Day 10: Advanced Types", icon: "⚡" },
    },

    // Additional days can be added here up to Day 20
];

const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-5", source: "1", target: "5", animated: true },

    // Day 1
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4", animated: true },

    // Day 2
    { id: "e5-6", source: "5", target: "6", animated: true },
    { id: "e5-7", source: "5", target: "7", animated: true },

    // Day 3
    { id: "e2-8", source: "2", target: "8", animated: true },
    { id: "8-9", source: "8", target: "9", animated: true },
    { id: "8-10", source: "8", target: "10", animated: true },

    // Day 4
    { id: "e5-11", source: "5", target: "11", animated: true },
    { id: "11-12", source: "11", target: "12", animated: true },
    { id: "11-13", source: "11", target: "13", animated: true },

    // Day 5
    { id: "e2-14", source: "2", target: "14", animated: true },
    { id: "14-15", source: "14", target: "15", animated: true },
    { id: "14-16", source: "14", target: "16", animated: true },

    // Day 6
    { id: "e5-17", source: "5", target: "17", animated: true },
    { id: "17-18", source: "17", target: "18", animated: true },
    { id: "17-19", source: "17", target: "19", animated: true },

    // Day 7
    { id: "e2-20", source: "2", target: "20", animated: true },
    { id: "20-21", source: "20", target: "21", animated: true },
    { id: "20-22", source: "20", target: "22", animated: true },

    // Day 8
    { id: "e5-23", source: "5", target: "23", animated: true },

    // Day 9
    { id: "e2-24", source: "2", target: "24", animated: true },
    { id: "24-25", source: "24", target: "25", animated: true },
    { id: "24-26", source: "24", target: "26", animated: true },

    // Additional edges can be added here
];

const downloadFlow = async () => {
    console.log("Download feature coming soon!");
};

const TsGuide = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div id="Wrapper" className="relative w-full min-h-screen text-black">
            <div className="flex text-white rounded-md shadow-md">
                <p className="mb-2 text-sm">
                    <span className="text-base font-semibold text-purple-500">Note:</span>{" "}
                    You can adjust and zoom in/out. The download feature is not yet
                    implemented but will be added soon.
                </p>
            </div>
            <div
                onClick={downloadFlow}
                className="absolute flex items-center p-2 mt-4 text-white bg-gray-600 rounded cursor-pointer top-4 right-4"
            >
                <FiDownload />
            </div>
            <div style={{ width: "960px", height: "580px" }}>
                <ReactFlow
                    nodes={nodes.map((node) => ({
                        ...node,
                        data: {
                            label: (
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ marginRight: "8px" }}>{node.data.icon}</span>
                                    {node.data.label}
                                </div>
                            ),
                        },
                    }))}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
};

export default TsGuide;