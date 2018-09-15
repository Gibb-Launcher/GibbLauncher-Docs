
# Arquitetura da Solução de Software

## Restrições e Metas Arquiteturais

O aplicativo será criado para auxiliar a utilização do lançador de bolas de tênis de mesa. Dentre as metas e restrições arquiteturais se encontram:
A aplicação tem como ponto focal dispositivos móveis, portanto será criado um aplicativo mobile.
O sistema será desenvolvido apenas para a plataforma Android, por questões relacionadas aos custos e prazo.
O banco de dados utilizado será o realm.
O aplicativo será desenvolvido na linguagem Java, versão 1.8.0_181, que é será utilizada para o desenvolvimento de aplicativos para Android.
A aplicação deve estruturada conforme o padrão arquitetural MVC - (Model-View-Controller).

O sistema hawkeye será implementado para, assim em conjunto com o aplicativo, auxiliar o jogador dando feedback a partir das jogadas realizadas. Dentre as restrições e metas estão:
Será um sistema embarcado em uma raspberry-pi para análise de vídeo, enviado pela câmera estrategicamente posicionada.
Se comunicará com o aplicativo via rede, onde será exibido os resultados das análises para o usuário.
Será utilizado a linguagem de programação Python, versão 3.6, além da utilização da biblioteca OpenCV que facilita na análise de imagens.
A API será desenvolvida com o framework django-rest para comunicação entre a aplicação mobile e a raspberry-pi.

## Visão Lógica

Para a aplicação será utilizada o padrão arquitetural MVC, muito utilizado para aplicações mobile.  O padrão arquitetural MVC é uma variante do estilo arquitetural N-Camadas.  As camadas têm as seguintes responsabilidades:

* **Model**: A camada Model é responsável pelas regras de negócio e comunicação com banco de dados. É onde são mapeadas as entidades da aplicação em forma de estrutura de dados. 
* **View**: A camada View é responsável é responsável pela exibição dos dados. Portanto, ela é a interface que permite a interação do usuário com o sistema. Os arquivos XML representam essa camada.
* **Controller**: A camada Controller é responsável por receber as requisições do usuário, encaminhar solicitações para as Models  ou atualizar as Views.

**Image MVC**

O estilo arquitetural cliente-servidor será utilizado para que exista comunicação entre o sistema embarcado na raspberry-pi de análise de vídeo (hawkeye) e o aplicativo mobile. Ambos deverão estar inseridos na mesma rede local. Onde o cliente é o smartphone onde está sendo executada a aplicação mobile e o servidor a raspberry-pi que provém os serviços .

**Imagem cliente servidor**

## Visão de Implantação
O sistema como um todo pode ser representado em uma arquitetura em camadas, onde a camada de cima atua como cliente da camada logo abaixo. As interações entre as camadas é feita através de chamadas de funções.

Para uma especificação mais detalhada, o sistema foi estruturado em quatro camadas, são elas:
* **Aplicação**: Representa a camada onde é possível a interação do usuário com o sistema.
* **Middleware**: São softwares entre outros dois outros software e representam, nesse contexto, os serviços providos pelo sistema.
* **Drivers/SO**: São representados por sistemas operacionais e drivers. Drivers são softwares responsáveis por definir e controlar interfaces de um hardware. 
* **Hardware**: Representa a parte física do sistema que têm interface com o sistema lógico.

Portanto, o aplicativo mobile representado na camada de aplicação deve consumir recursos dos serviços da camada abaixo (middleware), que consomem da camada de drivers e sistema operacional, que por sua vez consome da camada de hardware como câmera, raspberry-pi e motores. 

**Imagem camadas**

A comunicação entre o aplicativo no smartphone e os serviços de análise de vídeo e controle será feita através de uma API Rest via rede LAN-Wireless, portanto, será feito via json. O os protocolos de redes de computadores utilizados serão: http, para a camada de aplicação, tcp, para a camada transporte e  IP para a camada de rede. Abaixo pode ser visto a diagramação da comunicação entre o aplicativo mobile e a raspberry-pi.

A API receberá os dados e encaminhará para tradução, onde será feita a conversão dos dados para a forma aceita pelo microcontrolador, essa conexão será feita por bluetooth entre a raspberry-pi e o microcontrolador. De maneira diferente os dados serão repassados, da forma que chegaram, para o sistema de hawkeye.

A Fig. abaixo representa como será a implantação dos sistemas de software e embarcados e como será feita a comunicação.

**Imagem implantação**

## Visão da Implementação

O diagrama de classes abaixo representa apenas a camada model da aplicação ainda em concepção, esse diagrama será incrementado com o desenvolvimento do projeto. 

**Imagem implem**

## Visão de Dados
O banco de dados ficará na aplicação cliente, onde será armazenado todas as jogadas possíveis feitas pelo lançador. Além disso o histórico de rebatidas do usuário será armazenada para a construção de relatórios referentes ao desempenho do usuário.
A base de dados que será utilizado no aplicativo será o Real Database, um banco de dados orientado a objetos. Este banco de dados vem se mostrando mais rápido e de maior manutenibilidade maior que a do SQLite, que era até então o banco de dados mais utilizado para aplicativos mobile.

Utilizando este banco de dados é possível mapear as as classes modelos diretamente para o banco de dados. Este fato facilita o trabalho e evita o que normalmente acontece na construção de uma classe no aplicativo mobile, que atua como uma camada para realizar a conexão do banco de dados com as modelos, Data Access Object(DAO). O Realm já cuida desta parte e evita com que o desenvolvedor precise se preocupar com mais uma camada.
