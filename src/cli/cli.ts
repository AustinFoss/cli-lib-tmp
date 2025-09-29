#!/usr/bin/env node
import { myCommand } from "../index.js";

const arg = process.argv[2];
myCommand(arg);
