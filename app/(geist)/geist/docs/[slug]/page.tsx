export async function generateStaticParams() {
  const componentsDir = path.join(process.cwd(), 'app', 'components');
  const componentFolders = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return componentFolders.map((name) => ({ name }));
}
