# Cvičení 1 - Dotazník, seznámení

V tomto cvičení budeme vytvářet jednoduchou aplikaci na tvorbu dotazníků spokojenosti.

Vytvořte si repozitář ze šablony cviceni-dotaznik: https://github.com/Czechitas-podklady-WEB/cviceni-dotaznik

Nainstalujte závislosti a aplikaci spusťte.

Prohlédněte si vzhled aplikace a také její zdrojový kód. Nejsme už žádní troškaři, aplikace se skládá hned z pěti oddělených komponent. Prohlédněte si, jak jsou navzájem propojené a seznamte se s celkovou strukturou aplikace. Komponentu `Icon` zatím nezkoumejte. Je v ní trochu nepřehledný kód pro zobrazování ikonek.

Prohlédněte si komponentu ``Option``. Přepište ji tak, aby používala destrukturování props.

Totéž proveďte s komponentami `Question` a `QuestionBody`.


# Cvičení 2 - Dotazník s fajfkou

V našem dotazníku budeme chtít zařídit, že po kliknutí na jednu z 5 možných odpovědí se u otázky zobrazí ikonka fajfky. To provedeme tak, že dvě děti `Option` a `QuestionBody` spolu budou komunikovat skrze stav rodiče.

Nejprve chceme u otázky reagovat na kliknutí na jednu z jejich možností. V komponentě `Option` přidejte na div s třidou `option` posluchač události `onClick`. Zatím jej naprogramujte tak, aby do konzole vypsal text vybrané odpovědi, tedy například "spíše souhlasím".

V komponentě `Question` si vytvořte stav `answered`. Tento stavu bude říkat, zda je otázka zodpovězena, či nikoliv. Výchozí hodnota tohoto stavu bude `false`.

Zařiďte následující: pokud je ve stavu answered hodnota `false`, chceme, aby componenta `QuestionBody` měla ikonku `symbolQuestion`. Pokud je stav `true`, chceme, aby typ ikonky byl `symbolTick`.

Nyní chceme komponentě `Option` přidat callback, pomocí kterého může informovat svého rodiče, že otázka byla zodpovězena. Přidejte tedy komponentě `Option` prop s názvem `onSelected`. V této prop očekáváme funkci. Zařiďte, aby komponenta `Option` zavolala funkci `onSelected` ve chvíli, kdy na tuto komponentu klikneme.

V komponentě `Question` si vytvořte funkci `handleSelect`. Všem komponentám `Option` pak skrze prop `onSelected` tuto funkci předejte. Funkce `handleSelect` nechť nastaví stav `answered` na hodnotu `true`. Takto zajístíme, že kdykoliv uživatel klikne na nějakou možnost, stav se nám nastaví na `true` a tím se změní ikonka v těle otázky na fajfku.


# Cvičení 3 - Dotazník s odpovědí

Pokračujme v příkladu z předchozího cvičení. Nyní budeme chtít místo fajfky zobrazovat přímo uživatelem vybranou odpověd.

Stav `answered` uvnitř komponenty `Question` přejmenujte na `answer`. Nyní bude obsahovat řetězec s typem ikonky pro `QuestionBody`. Výchozí hodnota stavu bude `symbolQuestion`.

Zařiďte, aby komponenta `QuestionBody` zobrazovala místo `symbolQuestion` nebo `iconTick` ikonku odpovědi, na kterou uživatel kliknul.

Nyní budeme potřebovat, aby nám komponenta `Option` skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta `Option` tedy musí callbacku `onSelected` předat typ ikony, kterou zobrazuje.

Funkce `handleSelect` v komponentě `Question` bude pak mít jeden parametr, který nazveme `iconType`. Jakmile se tato funkce zavolá, nastavíme náš stav `answer` na hodnotu získanou v tomto parametru.

Tímto jsme zařídili, že komponenta `Option` předá svému sourozenci `QuestionBody` informaci o tom, kterou ikonku uživatel vybral.