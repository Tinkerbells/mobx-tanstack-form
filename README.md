# MobX TanStack Form Example

An example repo of external store (MobX) integration with TanStack Form core API for React.

## Technologies

- **React 19** - User interface
- **TypeScript** - Type safety
- **MobX** - State management with automatic reactivity
- **TanStack Form** - Powerful form handling library
- **Mantine UI** - Modern component library
- **Zod** - Schema validation
- **Vite** - Build tool

## Features

- ✨ **MobX-reactive wrapper** for TanStack Form with automatic observability
- 🔄 **Automatic reactivity** - form changes are tracked automatically
- 📝 **Zod validation** - strict typing and data validation
- 🎨 **Modern UI** with Mantine components
- 🚀 **TypeScript** - full type safety throughout
- 🎯 **Proxy delegation** - direct access to FormApi methods

## Core Components

### MobxForm

A wrapper class over TanStack Form that adds MobX reactivity:

- Automatic observability of all form changes
- Proxy for direct access to FormApi methods
- Lifecycle management with automatic cleanup
- Reaction to form options changes

This ensures automatic UI updates on any form changes while preserving all TanStack Form capabilities.
