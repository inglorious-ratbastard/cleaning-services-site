{ pkgs }: {
	deps = [
		pkgs.nodejs_20
		pkgs.yarn
		pkgs.nodePackages.typescript-language-server
	];
}	