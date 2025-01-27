# Next.js 13 Dynamic Route Handling Bug

This repository demonstrates a bug related to dynamic route handling in Next.js 13.  The bug occurs when using the `Link` component with dynamic routes that are not properly handled. 

## Bug Description

The `Link` component in the provided example doesn't correctly handle the dynamic route, resulting in incorrect navigation or rendering errors.

## Solution

The solution involves adding proper route handling using the `router` object to dynamically create the href and correctly navigate to the specified dynamic route.