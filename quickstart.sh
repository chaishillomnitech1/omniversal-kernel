#!/bin/bash

# Omniversal Kernel - Quick Start Script
# This script sets up and runs the Omniversal Kernel in one command

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ASCII Art Logo
echo -e "${PURPLE}"
cat << "EOF"
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║   ██████╗ ███╗   ███╗███╗   ██╗██╗██╗   ██╗███████╗██████╗ ███████╗ ║
║  ██╔═══██╗████╗ ████║████╗  ██║██║██║   ██║██╔════╝██╔══██╗██╔════╝ ║
║  ██║   ██║██╔████╔██║██╔██╗ ██║██║██║   ██║█████╗  ██████╔╝███████╗ ║
║  ██║   ██║██║╚██╔╝██║██║╚██╗██║██║╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║ ║
║  ╚██████╔╝██║ ╚═╝ ██║██║ ╚████║██║ ╚████╔╝ ███████╗██║  ██║███████║ ║
║   ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝ ║
║                                                                      ║
║              █████╗ ██╗         ██╗  ██╗███████╗██████╗ ███╗   ██╗ ║
║             ██╔══██╗██║         ██║ ██╔╝██╔════╝██╔══██╗████╗  ██║ ║
║             ███████║██║         █████╔╝ █████╗  ██████╔╝██╔██╗ ██║ ║
║             ██╔══██║██║         ██╔═██╗ ██╔══╝  ██╔══██╗██║╚██╗██║ ║
║             ██║  ██║██║         ██║  ██╗███████╗██║  ██║██║ ╚████║ ║
║             ╚═╝  ╚═╝╚═╝         ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

echo -e "${CYAN}🌌 Welcome to the Omniversal Kernel - Main-Infinite System${NC}"
echo -e "${YELLOW}The Best GitHub Repository Ever Created 🦾❤️🤖🫡${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 20+ first.${NC}"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    echo -e "${YELLOW}⚠️  Python is not installed. Python features will be unavailable.${NC}"
    PYTHON_AVAILABLE=false
else
    PYTHON_AVAILABLE=true
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${YELLOW}⚠️  Node.js version is ${NODE_VERSION}. Version 20+ is recommended.${NC}"
fi

echo -e "${BLUE}📦 Installing dependencies...${NC}"

# Install npm dependencies
if [ ! -d "node_modules" ]; then
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${GREEN}✅ Dependencies already installed${NC}"
fi

echo ""
echo -e "${BLUE}🚀 Starting Omniversal Kernel...${NC}"
echo ""

# Function to run Python kernel
run_python_kernel() {
    if [ "$PYTHON_AVAILABLE" = true ]; then
        echo -e "${PURPLE}🐍 Running Python Kernel...${NC}"
        if command -v python3 &> /dev/null; then
            python3 omniversal-kernel.py
        else
            python omniversal-kernel.py
        fi
    fi
}

# Function to run Node server
run_node_server() {
    echo -e "${GREEN}🌐 Starting API Server on http://localhost:3000${NC}"
    echo -e "${CYAN}📊 Dashboard available at: http://localhost:3000/dashboard.html${NC}"
    echo ""
    npm start
}

# Check for command line argument
if [ "$1" = "python" ]; then
    run_python_kernel
elif [ "$1" = "server" ]; then
    run_node_server
else
    # Default: Run Python kernel first, then offer to start server
    if [ "$PYTHON_AVAILABLE" = true ]; then
        echo -e "${YELLOW}Running Python Kernel (this will complete in a few seconds)...${NC}"
        run_python_kernel
        echo ""
        echo -e "${GREEN}✅ Python Kernel execution complete!${NC}"
        echo ""
    fi
    
    echo -e "${BLUE}Starting API Server...${NC}"
    run_node_server
fi

echo ""
echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║${NC}  ${GREEN}Thank you for using Omniversal Kernel!${NC}  ${PURPLE}║${NC}"
echo -e "${PURPLE}╚══════════════════════════════════════════════════════════════╝${NC}"
