import { createModel } from "xstate/lib/model";

const model = createModel({});

const machine = model.createMachine({
  id: "machine",

  initial: "idle",

  states: {
    idle: {
      tags: "This is a tag",
    },
  },
});
