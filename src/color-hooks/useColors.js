import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
