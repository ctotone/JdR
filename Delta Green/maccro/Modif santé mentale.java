?{Modification SM |
-1,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-1
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-1&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-1]]&#125;&#125; {{Conséquence=Aucune&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-2,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-2
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-2&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-2]]&#125;&#125; {{Conséquence=Aucune&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-3,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-3
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-3&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-3]]&#125;&#125; {{Conséquence=Aucune&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-4,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-4
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-4&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-4]]&#125;&#125; {{Conséquence=Aucune&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-5,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-5
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-5&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-5]]&#125;&#125; {{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-6,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-6
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-6&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-6]]&#125;&#125; {{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-7,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-7
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-7&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-7]]&#125;&#125; {{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-8,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-8
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-8&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-8]]&#125;&#125; {{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-9,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-9
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-9&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-9]]&#125;&#125; {{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
-10,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;-10
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=-10&#125;&#125; {{Point de rupture=@{selected|breaking_point}&#125;&#125; {{Santé mentale=[[@{selected|sanity_points}-10]]&#125;&#125;{{Conséquence=Fuite&#44; Violence &#44; Paralysie ou Évanouissement&#125;&#125;
/w gm Si la Santé mentale tombe **en dessous de la Rupture** ==> le PJ est affecté par un **trouble mental** !!|
+1,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+1
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+1&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+1]]&#125;&#125;|
+2,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+2
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+2&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+2]]&#125;&#125;|
+3,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+3
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+3&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+3]]&#125;&#125;|
+4,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+4
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+4&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+4]]&#125;&#125;|
+5,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+5
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+5&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+5]]&#125;&#125;|
+6,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+6
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+6&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+6]]&#125;&#125;|
+7,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+7
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+7&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+7]]&#125;&#125;|
+8,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+8
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+8&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+8]]&#125;&#125;|
+9,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+9
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+9&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+9]]&#125;&#125;|
+10,!modattr --silent --sel --charid @{selected|character_id} --sanity_points&#124;+10
/w gm &{template:default&#125; {{name=@{selected|name}&#125;&#125; {{Modif. SM=+10&#125;&#125;{{Santé mentale=[[@{selected|sanity_points}+10]]&#125;&#125;
}
