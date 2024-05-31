import { SettingComponentProps } from '@janhq/core/.'

export const presetConfiguration: Record<string, SettingComponentProps> = {
  prompt_template: {
    key: 'prompt_template',
    title: 'Prompt template',
    description: `A predefined text or framework that guides the AI model's response generation. It includes placeholders or instructions for the model to fill in or expand upon.`,
    controllerType: 'input',
    controllerProps: {
      placeholder: 'Prompt template',
      value: '',
    },
    requireModelReload: true,
    configType: 'setting',
  },
  stop: {
    key: 'stop',
    title: 'Stop',
    description: `Defines specific tokens or phrases that signal the model to stop producing further output, allowing you to control the length and coherence of the output.`,
    controllerType: 'input',
    controllerProps: {
      placeholder: 'Stop',
      value: '',
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  ctx_len: {
    key: 'ctx_len',
    title: 'Context Length',
    description: `Sets the maximum input the model can use to generate a response, it varies with the model used. Higher length is better for tasks needing extensive context, like summarizing long documents. Lower length can improve response time and reduce computing needs for simple queries.`,
    controllerType: 'slider',
    controllerProps: {
      min: 128,
      max: 4096,
      step: 128,
      value: 4096,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  max_tokens: {
    key: 'max_tokens',
    title: 'Max Tokens',
    description: `Sets the upper limit on the number of tokens the model can generate in a single output. A higher limit benefits detailed and complex responses, while a lower limit helps maintain conciseness.`,
    controllerType: 'slider',
    controllerProps: {
      min: 100,
      max: 4096,
      step: 10,
      value: 4096,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  ngl: {
    key: 'ngl',
    title: 'Number of GPU layers (ngl)',
    description: 'The number of layers to load onto the GPU for acceleration.',
    controllerType: 'slider',
    controllerProps: {
      min: 1,
      max: 100,
      step: 1,
      value: 100,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  embedding: {
    key: 'embedding',
    title: 'Embedding',
    description: 'Whether to enable embedding.',
    controllerType: 'checkbox',
    controllerProps: {
      value: true,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  stream: {
    key: 'stream',
    title: 'Stream',
    description: `Enables real-time data processing, which is useful for applications needing immediate responses, like live interactions. It accelerates predictions by processing data as it becomes available.`,
    controllerType: 'checkbox',
    controllerProps: {
      value: false,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  temperature: {
    key: 'temperature',
    title: 'Temperature',
    description: `Influences the randomness of the model's output. A higher value leads to more random and diverse responses, while a lower value produces more predictable outputs.`,
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 2,
      step: 0.1,
      value: 0.7,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  frequency_penalty: {
    key: 'frequency_penalty',
    title: 'Frequency Penalty',
    description: `Modifies the likelihood of the model repeating the same words or phrases within a single output. Increasing it can help avoid repetition, which is useful for scenarios where you want more varied language, like creative writing or content generation.`,
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 1,
      step: 0.1,
      value: 0.7,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  presence_penalty: {
    key: 'presence_penalty',
    title: 'Presence Penalty',
    description: `Reduces the likelihood of repeating tokens, promoting novelty in the output. Use a higher value for tasks requiring diverse ideas.`,
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 1,
      step: 0.1,
      value: 0.7,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  top_p: {
    key: 'top_p',
    title: 'Top P',
    description: `Set probability threshold for more relevant outputs. A lower value (e.g., 0.9) may be more suitable for focused, task-oriented applications, while a higher value (e.g., 0.95 or 0.97) may be better for more open-ended, creative tasks.`,
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 1,
      step: 0.1,
      value: 0.95,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  n_parallel: {
    key: 'n_parallel',
    title: 'N Parallel',
    description:
      'The number of parallel operations. Only set when enable continuous batching.	',
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 4,
      step: 1,
      value: 1,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  cpu_threads: {
    key: 'cpu_threads',
    title: 'CPU Threads',
    description:
      'Determines CPU inference threads, limited by hardware and OS. (Maximum determined by system)',
    controllerType: 'slider',
    controllerProps: {
      min: 0,
      max: 128,
      step: 1,
      value: 1,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  // assistant
  chunk_size: {
    key: 'chunk_size',
    title: 'Chunk Size',
    description: 'Maximum number of tokens in a chunk',
    controllerType: 'slider',
    controllerProps: {
      min: 128,
      max: 2048,
      step: 128,
      value: 1024,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  chunk_overlap: {
    key: 'chunk_overlap',
    title: 'Chunk Overlap',
    description: 'Number of tokens overlapping between two adjacent chunks',
    controllerType: 'slider',
    controllerProps: {
      min: 32,
      max: 512,
      step: 32,
      value: 64,
    },
    requireModelReload: true,
    configType: 'setting',
  },
  top_k: {
    key: 'top_k',
    title: 'Top K',
    description: 'Number of top-ranked documents to retrieve',
    controllerType: 'slider',
    controllerProps: {
      min: 1,
      max: 5,
      step: 1,
      value: 2,
    },
    requireModelReload: false,
    configType: 'runtime',
  },
  retrieval_template: {
    key: 'retrieval_template',
    title: 'Retrieval Template',
    description:
      'The template to use for retrieval. The following variables are available: {CONTEXT}, {QUESTION}',
    controllerType: 'input',
    controllerProps: {
      placeholder: 'Retrieval Template',
      value: '',
    },
    requireModelReload: true,
    configType: 'setting',
  },
}
