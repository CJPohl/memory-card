(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{21:function(A,C,g){},22:function(A,C,g){"use strict";g.r(C);var B=g(1),E=g.n(B),Q=g(7),e=g.n(Q),k=g(0),I=function(){return Object(k.jsx)("div",{className:"title",children:Object(k.jsx)("h1",{children:"Greek Memory"})})},J=g(8),a=g(2),r=g.p+"static/media/harp.0a532dc9.png",d=g.p+"static/media/lightning.24338ce7.png",c=g.p+"static/media/poseidon.1f1e7661.png",t=g.p+"static/media/vase.f1199b36.png",b=g.p+"static/media/zeus.dd68e5c3.png",n=function(A){var C=A.score,g=A.highScore;return Object(B.useEffect)((function(){document.getElementById("current-score").innerHTML="Current Score: ".concat(C)})),Object(B.useEffect)((function(){document.getElementById("highest-score").innerHTML="High Score ".concat(g)})),Object(k.jsxs)("div",{className:"score-card",children:[Object(k.jsx)("div",{id:"current-score"}),Object(k.jsx)("div",{id:"highest-score"})]})},S=function(A){var C=A.id,g=A.onClick,B=A.img.img;return Object(k.jsx)("div",{onClick:function(A){g(A)},className:"piece",id:C,children:Object(k.jsx)("img",{alt:"This is a game piece",src:B})})},s=function(){var A=Object(B.useState)(!1),C=Object(a.a)(A,2),g=C[0],E=C[1],Q=Object(B.useState)(0),e=Object(a.a)(Q,2),I=e[0],s=e[1],m=Object(B.useState)(0),O=Object(a.a)(m,2),i=O[0],u=O[1],v=Object(B.useState)([]),o=Object(a.a)(v,2),y=o[0],D=o[1],f=[],l=[{id:0,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABvfSURBVHic7d170G11eR/w74EDgiJC8BIUdYsiURRqTK2KClqsmphxKiZqUg02xmSq0V5MaJJpQ51Ok1ZHZZo4TUyiMWkyMV5S76NGvF9C1RKRcvEWL4h4AVGg3N63f6xz4ik9h7Pf9+y1n7X38/nMPAN/oL/L+v3W/r5rr73WjtDJEUlOSHKfJLMk905ybJI7Jzlm1z8P3/Xf3inJQcvvIrBgG0m+u+vfr0/yrSTfTvLNJFck+dIedWmSa5fdQWrsqO4AozkyycN31clJTklyfHyoA/u2keQLSS7YVZ9I8rEk36vsFOMQANbH4UlOT/KkJI9J8qAkB1d2CFgLtyT5TJIPJnlnkg9kuJLAihMAVtsxSZ66q07LDy7fA4zl+iTvT/KmXfWd0t6wbQLA6jk8yU8leWaSf5zkkNruAI3dlOS9Sf48yRviysBKEQBWx8lJnpfkZ5McVdwXgFu7OsmfJnl1kr8t7gtzEACmbUeGv/JflOTJxX0BmNdHkpyb4SuCW4r7wj4IANN0cIa/9P9tkgcU9wVguy5K8ttJ/iyCwOQIANOyI8nTkrwkyY8U9wVgUS5O8ltJ/nsEgckQAKbjtCSvSPKQ6o4AjORTSf5Vhp8UUsxDYerNkvxlhp/V+PAH1tmPZniOwF9keBIphTwops5BSX4hyV8l+QfFfQFYppOS/GKSm5N8PMlmbXd68hVAjZOT/GGSH6vuCECx85M8N346uHSuACzXjgw/6Xt9knsV9wVgCu6RIQAcnOHeAFcDlsQVgOU5LskfJ3lcdUcAJuq9Sc5K8rXifrQgACzHaRluerlbdUcAJu5bSX4myXuqO7LufAUwrt2X/P80w+t5Abhtt88QAG5I8tHivqw1VwDGc1iS1yZ5enE/AFbVnyd5ToYwwIIJAOP4oSRvTvKY6o4ArLiPJXlKkm9Wd2TdCACLd3ySdyU5obojAGvi0iRPTPLF6o6sEwFgsU7McBfrcdUdAVgzX0/yT5JcWN2RdeFRwItzUpLz4sMfYAzHJvnrJKdUd2RduAKwGA/O8OF/THVHANbct5OcHlcCDpgAcOBOyPByi2OrOwLQxJUZnq9ycXVHVpkAcGDuneTDcdkfYNm+nOTRu/7JNggA23dkhg//B1d3BKCpi5KcmuTq6o6sIjcBbs8hSd4YH/4AlR6Y4Zkrh1Z3ZBV5FPD2/EGSM6s7AUBmGe7BemtxP1aOALB1z0/yG9WdAODv/WiG5wR8srojq8Q9AFvz8Ax3/LvcBDAtNyV5bJKPVHdkVQgA8zsmyQVJ7lHdkQX5RoYbaC5NckmGn9NcmeSaJN9Pcu2ufwdW25FJjkhyh13/ftckD0hy/wxPL31A1udV5V/J8KCgq6o7wnr5iySbK1xXJnl9htcTPzTCH/ADxyd5XpLXJflq6s9XB1JvXPDc0NzPp35Rb6euzrChz4gPfGB+D01ybpJvpf48tp06a+EzQkv3znApvHpBb6XOS/LTSQ4bYT6APg5P8vQM9z5Vn9e2UtckudcI80Ezb0n9Yp63PpzkceNMA9DcqRl+areR+nPdPPWOcaaBLp6V+kU8T707yUNGmgOAPT00w2vPq89789QzR5oD1tzRSb6Z+gV8W/XVDJf6AZbtmUkuT/158LbqG0nuNNYEsL5emfrFu6+6JcnLk9xxtNED7N+RGW4WvCX158V91ctGGz1r6UeS3Jj6hbu3ujLJE8cbOsCWPS7Dk/iqz497qxszPO8A5vLW1C/avdX7MjzzGmBq7pHp/lrgr0YcN2vkEalfrHurl8W7G4Bp25nkFak/X966NpI8bMRxsyamdnfrRpKzRx0xwGK9KNP7ueC7Rh0xK+8xqV+ke9ZNSX5u1BEDjOM5Gc5h1efRPevUUUfMSnt76hfo7ro5yVPHHS7AqJ6W4VxWfT7dXW8Zd7isqhMznZ+ybCR57rjDBViK56X+nLrnufWB4w6XVfQHqV+cu+vXRh4rwDL9+9SfV3fX7488VlbM0UmuS/3C3EzyqpHHClDh1ak/v25mONcfNfJYWSEvTP2i3ExyfpLbjTxWgAq3S/LJ1J9nN5M8f+SxskL+V+oX5FVJjh97oACF7pfku6k/314w9kBZDQ9L/WLcTHLm2AMFmICnp/58u5nkx8YeKNP38tQvxD8bfZQA0/GXqT/vvnT0UTJpO5L8XWoX4TUZnqEN0MVxSb6X2nPvlzN8BtDUqalPoS8afZQA0/Pi1J9/HzH6KJms/5zaxXdBhpdnAHRzSJLPpvYc/Fujj5LJ+kxqF59H/QKdVd8Q+Onxh8gUHZfat1VdlOSg0UcJMF0HJbk4defhjSR3H32UE9X5A+gJqb0B5D9lWHwAXW2k9jL8jiSPL2yfIq9JXer8Qnz3D5AM58Ivpe58/OrRRzhRna8AVL4X+rUZXpEJ0N3NSf64sP1HFbZNgTun7vv/jXjkL8Ce7pfac/Jdxh/i9HS9DP2w1H3//+EMXwEsy1m7atleu6uW7ZQkLytol/X34tQ8Q/6srP8e/lySj6bmyuyODI8FfmdB26W6BoCTC9t+3ZLbmyU5bcltJsn7C9pMhlc7n1HUNuvt6KJ2Z+mxh/8kdV/NnpyGAaDrPQCnFLbdbpEBzOEdhW0/uLDtMl0DQNXBvjjJ14raBpiyryS5rKhtAaCJHUnuW9T2+4raBVgFVefIE9LwxUAdA8CxSQ4ravu8onYBVkHVOfLwJHctartMxwAwK2z7E4VtA0zdxwvbvk9h2yU6BoB7F7V7bZKvFrUNsAq+kuS6orarPhvKdAwAdytq95IMD50AYO82UncjoK8AGjimqN1LitoFWCVV58qqz4YyAsDyVKVagFVyaVG7dy5qt0zHAFD1NK/vFLULsEqqzpVVnw1lOgaAqp8Afq+oXYBVUnWuvF1Ru2U6BoBDi9oVAAD2TwBYEgFgeb5f1C7AKhEAlqRjAKh63ONNRe12c3B1B1hb1tZy3FjUbrvj2zEAVD1k4g5F7XZzZHUHWFtHVHegiTsWtVsVPMp0DADXFrVbtai7Mc+MxdpaDgFgSToGgKrv4p08lsM8MxZrazkEgCXpGABcAVhv5pmxWFvLUTXP1xS1W0YAWJ57FrXbzb2qO8DasoeXo2oPt3tYmwCwPCcWtduNeWYs1tZyVM3zVUXtlukYAK4satfJYznMM2Oxtpajap6/XtRumY4B4PNF7d4zfkY0tiOS3L26E6wte3h8lXu46rOhjACwPDuSPLCo7S4elLoHPbH+7OHxVe7hLxS1W6ZjAPhqkhuK2j69qN0uHlvdAdbe6dUdWHNVe/iGJJcXtV2mYwDYSPLlorZ9QI3rcdUdYO3Zw+Oq2sNfzPDZ0ErHAJDUfQ3wmNS9jGjdHZrkkdWdYO3Zw+Op3MPtvv9P+gaAy4ravX2Sf1TU9rp7ZIb5hTHZw+Op3MMCQCPnF7b99MK219kzqjtAG/bwOCr38CcK2y7T9Y7p+6XuKsC3M/zMZVnPnZ7tqmX70q5ahttl+A3v0Utq79b+eZKvFLXd1T2T/FFR2/bw4lXv4eMz3AdAE1ck2Syqf7qE8XXytNQdy6vT8D3iE3BQhie32cProXIPf20J45ukrl8BJMnHC9t+dmHb6+hZhW1/KMkthe13tZHkw4Xt28OLVbmHKz8LSnUOAB8rbPsnk5xQ2P46uW+SHy9s/wOFbXf3ocK27eHFqd7DHy1su5QAUOPgJL9a2P46+Y0kOwvb/2Bh291Vzr09vDjVe7jys4Aih2b4/rbqe6cb4vWiB2qW4UasqmN4TWpPXN0dkuR7sYdX2Sy1e/jbGdZRS52vANyY5G2F7R+a5FcK218HZ6d2874zyc2F7Xd3U5J3FbZvDx+46j38tgzriIbOTF3y3P0XxANGH+V6Oim1fzlsJvmp0UfJ/jwj9vCqmsIefsroo2Sybp/k2tQuwA+k7/MYtmtHkvNSe9yuT3LHsQfKfh2R4VjYw6tlCnv42nh6aHtvTu0i3Ezys6OPcr2clfpj9uaxB8nc3pL69WAPb81ZqT9mbxh7kEzfs1O/EL+e5JixB7om7pLkG6k/Zn4HPh1npX492MPzm8oe/mdjD5Tpu1Nq7yTeXW+Ly4j7c1CGm76qj9U1cfl/So6MPbwq7GEm57+lfkFuxh3F+/PrqT9Gm0leNfZA2bLfT/26sIf3byp7+HfGHiir46QMjxatXpQ3JTl15LGuqkdnmJ/qY7SZ5CEjj5WtOyX168Ievm1T2sMPGnmsrJgPpn5Rbmb4bswjRv9f983wHWv1sdlM8pGRx8r2fSL168Me3rsp7eH3jTxWVlD174n3rM8l+eFxh7sy7pLkktQfk93lxqHpek7q14c9/P+b2h4+c9zhsooOzXQS6maST8ZNKkcm+VTqj8Xu+kqG95YzTYcluTz168Qe/oGp7eGvpvGjf7ltZ6d+ge5ZH0xy1Kgjnq6jMrztrfoY7FkvGHXELMK/TP06sYcHU9zD/2bUEbPSDs+QEKsX6Z51YZLjxhz0BB2b5NOpn/s96/IM64NpOyzJ11K/Xuzhae5hT/7jNr0g9Qv11vXFJCeOOegJuW+G70+r5/zW9cIxB81C/evUrxd7uH7Ob12/NOagWQ+HZtis1Yv11vXNJE8ccdxT8BNJvpX6ub51+et/tdw+yRWpXzf28HTq8/HdP3Oa0t3Ee9ZGknOzfgt5Z5JzktyS+jneW/3CaCNnLL+U+nVjD0+nnjXayFk7Bye5KPWLdl/1oST3Gm30yzXL8Nv66jndV52f4fGlrJaDM9yFX71+7OH6ujDDeoC5nZZpPB1wX3VthsS9qj9LOyTJizKNZ7jvqzaSPHysCWB0j4w9PKZV2cOPG2sCWG9/mPoFvL+6JMnjx5qAkZyWIZVXz93+6o/GmgCW5k9Sv47s4br6vbEmgPX3Q5nmzUS3ro0kb8/wF8+UPSrJO1M/X/PUVUnuNs40sETHJvlu6teTPbz8ujx9n8HAgjwz9Qt5K/W+TO+S1xlJzkv93GylPPJ3fZyV+vVkDy+/njbKTNDOW1K/mLdaF2f4fvH4xU/HXI7L8GTFi/fRvynXm0aYD2q9PvXryh5eXr19hPmgqeMy/Ia3elFvp27J8BfFL2d47fFYdmR4xeYLk7w/07756rbq8iTHLHZqmIC7ZFrv+rCHx6srMnz1w37sqO7ACnlCkndk9X8S9o0Ml/I+lOR/Z7gB6fJt/P/cI8OTzR6Q4T3fj01y1wX1scpmhgeZvLO6I4ziyUneWt2JBbCH9+2WDOfqv67uyCoQALbmJUn+XXUnRnBNkksznFi+n+Gmqe8luTnDAz7umOFmmiMynCBOzHq+5ewVGR4jux1HZXgRDeN7ZZKrt/m/PTfr+Vhne3jwmxnO07BwByV5d+ovcanF13sznCi3azaBMXSp2VxHZO92ZricXj0Gtfh6XzzwZ0tW/XL2sm1kuDt8O5fbmK6/S/KMDH8tsd5uznB3+BeqO8JCXZHkZzJ8BcCcBICtuzLJmUmuq+4IC3FtkqdkeIEJPXwnQwiwh9fD7j18RXVHVo0AsD0fT/L0+Itx1d2S5OeSXFDdEZbu0xle+rVR3REOyE1JfjrJ31R3ZBUJANv3tvzgrYGsns0k/yLJG6s7QpnXJ3l+dSfYts0kv5jh11lQ4tdTf/OL2nqdvbeDeQBmExhTl5rNdUTmZw+vZi16D8O2/NfUbwY1f/2XvR/GAzKbwLi61GyuI7I1L53AuNT89cq9H0ZYvh0ZFmT1plD7r9/NOM+/mE1gbF1qNtcR2ZodSV41gbGp/dfL4xk2TNDZqd8cat/12/s+dAdsNoHxdanZXEdke+zhadeYexgO2Asy3F1evVHUD2ojya/c1kFbgNkExtmlZnMdke17YVb3OfjrWhvZ/lM6YameleHnKdWbRg0/1XzubR+uhZgVjK1rzeY6Igfm2bGHp1I3J/n52z5cMC0/meF55dWbp3NdleRJ+ztQCzJbwnjUULO5jsiBe3Ls4eq6KsMLumDlnJDkM6nfRB3rkgxvOVuW2QhjUHuv2VxHZDFOSPLZEcag9l8XZ7l7uB0PAhrXZUkekeQN1R1p5u1JHpbhValwIC5L8vAkb67uSDNviT3MmtiR5NcyfJdVnarXuW7K8Lrmip8IzbbYV7X9ms11RBbroCTnxH0BY9fNSX41fubHGjotyedTv8nWsS7J8BdDldle+qTGqdlcR2Qcj8hwVaB6DtaxLkvy6PkPBayewzP8ltVPBRdTG0l+L8kRWzkII5ilfi661GyuIzKew5OcGz8VXFRNZQ/D0pyW5HOp33yrXF9K8oQtzvtYZqmfjy41m+uIjO9JSb6c+vlY5fJXP23dIckrktyY+o24SnV9kpckuf3Wp3w0s9TPS5eazXVEluMOSf5jhjVZPS+rVDdmeKTvlPYwlLh/hleTuqS4/3prkuO3N82jmqV+brrUbK4jslz3zbCHq+dmFeo9SU7a3jTD+jo1yUdTv0GnWOdnOpf792aW+jnqUrO5jkiNJyX5ZOrnaIr1kSSP3P7UwvrbkeRp8fCR3fWJrMaTwGapn6suNZvriNTZkeFJoOenfq6mUBcmeeoBzSg0syPDXxPvSf0GrqiPZHmP8V2EWernrEvN5joi0/ATST6W+jlbdm0keXeSJ8Zv+uGA3D/Dz46uS/3GHrOuz/A96qmLmbalmqV+/rrUbK4jMi0PzfBTt++nfv7GrBuSvC7JgxczbcBuP5zhKVmfSv1GX2RdmOSXk9xpcVO1dLPUz2OXms11RKbpqAyvG163r/g+meGV23db3FQB+zJLcnaSi1K/+bdTn83wQKRHLXheqsxSP6ddajbXEZm+kzI8Xvh/pn5Ot1Of3dX/Exc7LSyL72bWwylJnpLk9AwvLjm8tDd7d0OSv0nyjiRvSnJpbXcWbpbki9WdaOI+GR4CtU5OzHCj3I8n+YdJblfbnb26PsnHk5yX5H8k+dva7nCgBID1szNDIDhjV52amkBwXZJPJ/lwkvdmuKnv+oJ+LMssAsCyrGMA2NMhSU7OsH8fleFJeRVfj92c5IIM+/e9Gfby/ynoB7BN56Tm8uA54w9tUmapvyTbpWZzHZH1cU7sYUaws7oDsCauTvIfqjvRxNXVHYB1IADAYlwdfzEBK+Sg6g4AAMsnAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQwIAADQkAABAQzurO9DISUmOLWj3+II2d7d7RlHbsE667eGvJ/lsQbvt7KjuQCOvSXJWdScAJu61SZ5T3YkOfAUAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQkAAAAA0JAADQ0M7qDjC6i5JcXt0JYOXcPckDqzvBeASA9ffSJK+t7gSwcs5K8prqTjAeXwEAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEM7qzvA6F6zqwDg77kCAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAAANCQAA0JAAAACwhs5JsllQ54w/NGjhnNjDjMAVAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoSAAAgIYEAABoaGd1B2DBTknysoJ2L0jy4oJ2k+Q9Re0+vqjdl2U4zsv24gzHGdaCAMC6OTrJGQXtVu6livFWemiS0wvaPbqgTRiNrwAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoCEBAAAaEgAAoKGd1R1gbf3mruri9CSb1Z1Ysm7jPa+6A7BIrgAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEMCAAA0JAAAQEP/F6dZba2aiz+qAAAAAElFTkSuQmCC"},{id:1,img:r},{id:2,img:d},{id:3,img:"data:image/png;base64,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IAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQ0eoFAPjR3Z2Zx6uXYNv8AgAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABB0tHoBgJd0f2burV7iArdXLwAXEQDAoTt+cQHX4AgAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABB0tHoBgJd0OjOPVi+xMX9fvQDbJwCAQ3c+M5+vXgIOjSMAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQ0eoFgGv5YGY+Xr3EBT5YvQBwdQIADsvJiwvgpTgCAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAEHa1eALiWs5l5vHqJjXmyegE4RAIADsuTmfl49RLA4XMEAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIOlq9AFzinZn51eolLnC8egGAlyEA2LKTmfls9RIAryNHAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAoKPVC8Alns/M09VLbMyz1QsArwcBwJadzcyd1UsAvI4cAQBAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQdrV6A/zueme9WLwFAg18AACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAgv4Hee0RjgMSfXkAAAAASUVORK5CYII="},{id:4,img:"data:image/png;base64,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"},{id:5,img:"data:image/png;base64,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"},{id:6,img:c},{id:7,img:t},{id:8,img:b}],V=Object(B.useState)({img:l[0].img,id:l[0].id}),w=Object(a.a)(V,2),X=w[0],Z=w[1];f.push(X);var j=Object(B.useState)({img:l[1].img,id:l[1].id}),M=Object(a.a)(j,2),z=M[0],N=M[1];f.push(z);var P=Object(B.useState)({img:l[2].img,id:l[2].id}),T=Object(a.a)(P,2),h=T[0],W=T[1];f.push(h);var p=Object(B.useState)({img:l[3].img,id:l[3].id}),L=Object(a.a)(p,2),H=L[0],K=L[1];f.push(H);var U=Object(B.useState)({img:l[4].img,id:l[4].id}),x=Object(a.a)(U,2),G=x[0],q=x[1];f.push(G);var Y=Object(B.useState)({img:l[5].img,id:l[5].id}),F=Object(a.a)(Y,2),R=F[0],_=F[1];f.push(R);var $=Object(B.useState)({img:l[6].img,id:l[6].id}),AA=Object(a.a)($,2),CA=AA[0],gA=AA[1];f.push(CA);var BA=Object(B.useState)({img:l[7].img,id:l[7].id}),EA=Object(a.a)(BA,2),QA=EA[0],eA=EA[1];f.push(QA);var kA=Object(B.useState)({img:l[8].img,id:l[8].id}),IA=Object(a.a)(kA,2),JA=IA[0],aA=IA[1];f.push(JA);var rA=function(){!function(A){for(var C=A.length-1;C>0;C--){var g=Math.floor(Math.random()*(C+1)),B=[A[g],A[C]];A[C]=B[0],A[g]=B[1]}}(l),Z({img:l[0].img,id:l[0].id}),N({img:l[1].img,id:l[1].id}),W({img:l[2].img,id:l[2].id}),K({img:l[3].img,id:l[3].id}),q({img:l[4].img,id:l[4].id}),_({img:l[5].img,id:l[5].id}),gA({img:l[6].img,id:l[6].id}),eA({img:l[7].img,id:l[7].id}),aA({img:l[8].img,id:l[8].id})},dA=function(A){var C=Number(A.target.parentNode.id);D([].concat(Object(J.a)(y),[C])),y.includes(C)?(s(0),D([])):s(I+1),rA()};return Object(B.useEffect)((function(){u(0===I||i>I?i:I)}),[i,I]),Object(B.useEffect)((function(){9===I&&E(!0)}),[I]),g?Object(k.jsx)("div",{className:"main",children:Object(k.jsx)("h1",{children:"You win!"})}):Object(k.jsxs)("div",{className:"main",children:[Object(k.jsx)(n,{score:I,highScore:i}),Object(k.jsxs)("div",{className:"game-board",children:[Object(k.jsx)(S,{id:X.id,img:X,onClick:dA}),Object(k.jsx)(S,{id:z.id,img:z,onClick:dA}),Object(k.jsx)(S,{id:h.id,img:h,onClick:dA}),Object(k.jsx)(S,{id:H.id,img:H,onClick:dA}),Object(k.jsx)(S,{id:G.id,img:G,onClick:dA}),Object(k.jsx)(S,{id:R.id,img:R,onClick:dA}),Object(k.jsx)(S,{id:CA.id,img:CA,onClick:dA}),Object(k.jsx)(S,{id:QA.id,img:QA,onClick:dA}),Object(k.jsx)(S,{id:JA.id,img:JA,onClick:dA})]})]})},m=function(){return Object(k.jsxs)("div",{className:"footer",children:[Object(k.jsx)("p",{children:"Copyright @ 2021 Christopher J. Pohl"}),Object(k.jsx)("a",{href:"https://github.com/CJPohl",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("i",{className:"fab fa-github"})})]})};g(14),g(18),g(19),g(20),g(21);var O=function(){return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)(I,{}),Object(k.jsx)(s,{}),Object(k.jsx)(m,{})]})};e.a.render(Object(k.jsx)(E.a.StrictMode,{children:Object(k.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.874c2c06.chunk.js.map