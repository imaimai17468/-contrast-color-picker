export const Header = (): React.ReactNode => {
  return (
    <header className="sticky top-0 z-50 py-4 px-8 flex gap-4 items-center justify-between bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Contrast Color Picker</p>
        <p className="text-sm text-muted-foreground">
          <em>oklch()</em> + lightness curve / color palette for dark theme as well as light theme
        </p>
      </div>
    </header>
  );
};
