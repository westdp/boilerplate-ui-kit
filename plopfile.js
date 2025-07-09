export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [{ type: 'input', name: 'name', message: 'Name of a new component' }],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{kebabCase name}}',
        templateFiles: 'plop-templates/component/*',
        base: 'plop-templates/component',
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: '// plop:component-import',
        template: "export * from './{{kebabCase name}}'",
      },
    ],
  })
}