<style>
.row {
  display: flex;
  flex-direction: row;
}
.row.space-between {
  justify-content: space-between;
}
.row.space-around {
  justify-content: space-around;
}
.row:not(.static) > * {
  flex: 1;
}
.center-cells td:not(:first-child) {
  text-align: center;
}
</style>

# Microeconomics

## Production

In a two-producer two-good system (known as a **Ricardian Economy**), the ability of the system to produce goods can be represented by an **input table**:

{.row.center-cells
  ||Good *g*|Good *h*|
  |-|-|-|
  |**Producer** ***p***|input cost for ***p*** to produce a unit of ***g***|input cost for ***p*** to produce a unit of ***h***|
  |**Producer** ***q***|input cost for ***q*** to produce a unit of ***g***|input cost for ***q*** to produce a unit of ***h***|
}

{center
  or an **output table**:
}

{.row.center-cells
  ||Good *g*|Good *h*|
  |-|-|-|
  |**Producer** ***p***|***p***'s output of ***g*** given a unit of input|***p***'s output of ***h*** given a unit of input|
  |**Producer** ***q***|***q***'s output of ***g*** given a unit of input|***q***'s output of ***h*** given a unit of input|
}

For example, the abilities of you and your roommate to cook and clean can be modeled as a Ricardian Economy. Let's say you both have an hour of free time today. You can cook a dish in 10 minutes or clean a room in 20 minutes. She can cook a dish in 30 minutes and clean a room in 15 minutes. The input and output tables in our economy look like this:

{.row
  {center
    **Input**
    ||Cook|Clean|
    |-|-|-|
    |**You**|10|20|
    |**Roommate**|30|15|
    Time to perform one task, in *minutes*
  }
  {center
    **Output**
    ||Cook|Clean|
    |-|-|-|
    |**You**|6|3|
    |**Roommate**|2|4|
    Number of tasks completed, per *hour*
  }
}

On an input table, *lower* is better (fewer resources consumed), and on an output table, *higher* is better (more product).

If you both spend all your time cooking, you'll be able to make 8 dishes. If instead you both spend all your time cleaning, you'll be able to clean 7 rooms. But if one cooks and the other cleans, who should take on which activity? You cook more efficiently than your roommate does, and she cleans more efficiently than you do. If you cook and your roommate cleans, you'll be able to get through 6 dishes and 4 rooms. If you clean and your roommate cooks, you'll only be able to get through 2 dishes and 3 rooms. The first case is a win-win, so it is clearly preferable for you to cook and her to clean.

Each of you has an **absolute advantage** in producing one of the goods, because each of you can perform a particular activity more efficiently than the other can, so you both get the most by **specializing**. In some cases, however, one producer might have an absolute advantage in producing both goods, and it may not be immediately clear how each producer should specialize. To solve this problem, let's check out another way to understand our economy. You and your roommate each have a **production–possibility frontier (PPF)**:

{.row
  {center
    **You**
    <iframe src="https://www.desmos.com/calculator/tuydkxxqjn?embed" width="300px" height="300px" style="border: 1px solid #ccc" frameborder=0></iframe>
  }
  {center
    **Roommate**
    <iframe src="https://www.desmos.com/calculator/hlqkjnazl1?embed" width="300px" height="300px" style="border: 1px solid #ccc" frameborder=0></iframe>
  }
}

The PPF reveals a bit more information about a producer's circumstances. Focusing on your own production for now—notice the output possibilities $(0, 6)$ and $(4, 0)$ from before, as well as the points $(1, 4)$ and $(2, 2)$. These are called **production points**. Every point in the shaded region represents a possible or **attainable** production point, but only points lying on the frontier are desirable or **efficient**, because for every attainable production point below the frontier, there is an attainable production point that has more of one or both goods. Finally, production points beyond the frontier are **unattainable**.

The slope of the PPF can tell us even more. On your PPF, the slope is $-2$ everywhere. This means that at any point, in order to clean one more room, you have to give up two dishes. Meanwhile, the slope of your roommate's PPF is $-\frac{1}{2}$; she only has to give up one dish for every two rooms cleaned. This is known as **opportunity cost**. Formally, the opportunity cost of a good is the value of that good in terms of the value of the *best alternative good*. Because it is derived from the slope of the PPF, opportunity cost also tells us how much we have to sacrifice to go from one efficient production point to another. We can rewrite our tables to show opportunity cost by dividing the output of each good *from* the output of its alternative in the output table, or dividing the input of each good *by* the input of its alternative in the input table:

{center
  **Opportunity Cost**
  ||Cook|Clean|
  |-|-|-|
  |**You**|$\frac{1}{2}$ rooms|2 dishes|
  |**Roommate**|2 rooms|$\frac{1}{2}$ dishes|
  Number of tasks completed, per *hour*
}

The producer with the lowest opportunity cost in a good has a **comparative advantage** in that good, because he or she has to give up the least opportunity to produce it.

Let's say you cut your hand while cooking yesterday, so you now require a cautious 30 minutes to prepare one dish. Meanwhile, your roommate just finished binging MasterChef and is particularly excited about cooking today, ready to apply all her new techniques. (She now cooks as fast as you normally do). The new input, output, and opportunity cost tables look like this:

{.row
  {center
    **Input**
    ||Cook|Clean|
    |-|-|-|
    |**You**|30|20|
    |**Roommate**|10|15|
    Time to perform one task, in *minutes*
  }
  {center
    **Output**
    ||Cook|Clean|
    |-|-|-|
    |**You**|2|3|
    |**Roommate**|6|4|
    Number of tasks completed, per *hour*
  }
}

{center
  **Opportunity Cost**
  ||Cook|Clean|
  |-|-|-|
  |**You**|$\frac{3}{2}$ rooms|$\frac{2}{3}$ dishes|
  |**Roommate**|$\frac{2}{3}$ rooms|$\frac{3}{2}$ dishes|
  Number of tasks completed, per *hour*
}

Inspecting each activity for its lowest opportunity cost entry, we find that you have a comparative advantage in cleaning while your roommate has a comparative advantage in cooking, despite her having an absolute advantage in both activities. Let's see what we can learn from the **economy-wide PPF**:

{center
  **Economy-Wide PPF**
  <iframe src="https://www.desmos.com/calculator/nuia1v1pxa?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

If you specialize according to your comparative advantages, you'll produce *efficiently* at $(3, 6)$. If you specialize the other way around, however, you'll produce *inefficiently* at $(4, 2)$. If you wanted 4 rooms cleaned, you can still cook 4.5 dishes $(4, 4.5)$. Or, if you only wanted 2 dishes, you could clean 5$\frac{2}{3}$ rooms $(5\frac{2}{3}, 2)$. The region formed by these points contains all the attainable production points that are **monotonically preferred** to producing at $(4, 2)$, that is, they contain no less output in any good, and more in at least one good:

{center
  <iframe src="https://www.desmos.com/calculator/mfps1nq3sm?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

How do we split up the work to produce at these points? Let's use $(3, 6)$ as a reference point. Because you, with the comparative advantage in cleaning, are already spending all your time on it, your roommate now has to divert some of her time to cleaning. Using her opportunity cost of $\frac{3}{2}$ dishes per room, we find that cleaning one more room indeed yields the production point $(4, 4.5)$.

Note that the slope of the PPF on the interval $(0, 3)$ is $-\frac{2}{3}$, which represents your opportunity cost, while on the interval $(3, 7)$ it is $-\frac{3}{2}$, which represents your roommate's opportunity cost.

In general, an economy that wants to maximize overall production under the constraint of producing a set amount of one particular good will assign to it the *lowest opportunity cost available* producers in that good until the constraint is met. This is in fact one method by which the PPF is constructed. If we sacrificed your roommate's cooking first, the PPF would look like the dotted curve below, which misses a large (and important!) portion of the attainable production points.

{center
  <iframe src="https://www.desmos.com/calculator/iv5trzasra?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

## Demand and Supply

**Demand** is the relationship between the market price of a good and the **quantity demanded** by consumers in the market. Demand is usually a negative relationship (known as the **Law of Demand**). Demand can be represented by the **demand function**:
```math
Q^d = D(p)
```
or the **inverse demand function**:
```math
p^d = d(Q)
```

**Supply** is the relationship between the market price of a good to the **quantity supplied** by producers. Supply is usually a positive relationship (known as the **Law of Supply**). Supply can be represented by the **supply function**:
```math
Q^s = S(p)
```
or the **inverse supply function**:
```math
p^s = s(Q)
```

Most demand and supply graphs show quantity on the horizontal axis and price on the vertical axis, and thus are graphed by the inverse demand and supply functions.

{center
  **Demand and Supply Graph**
  <iframe src="https://www.desmos.com/calculator/6quhw9z1mn?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

When we say that demand or supply increases, we mean that the quantity demanded or supplied has generally increased over all prices (this translates to a rightward shift of the demand or supply curve on the graph).

{.row.static.space-around
  <iframe src="https://www.desmos.com/calculator/5ug4pxi1l3?embed" width="300px" height="300px" style="border: 1px solid #ccc" frameborder=0></iframe>
  <iframe src="https://www.desmos.com/calculator/soffhxqgai?embed" width="300px" height="300px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

The **aggregate demand** in a market is determined by the sum of the demand functions of its component markets:
```math
Q_{agg}^d = \sum_{k=1}^n Q_k^d
```

{center
  <iframe src="https://www.desmos.com/calculator/fvvtedaar8?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

The **aggregate supply** in a market is determined by the sum of the supply functions of its component markets.
```math
Q_{agg}^s = \sum_{k=1}^n Q_k^s
```

{center
  <iframe src="https://www.desmos.com/calculator/xjswwmtpez?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

Aggregate demand and supply appear as *horizontal sums* on a demand and supply graph.

## Measures of Market

The **producer reservation price** is the lowest price at which a producer is willing to sell one unit of good (at any less the sale would not be profitable). The **consumer reservation price** is the highest price a consumer is willing to pay for one unit of good (any more and the benefit would not be worth the money spent). In the demand and supply model, the producer reservation price and consumer reservation price are usually determined by the inverse supply and inverse demand functions.

**Market equilibrium** is defined as the $(p^\ast, Q^\ast)$ such that $Q^\ast = D(p^\ast) = S(p^\ast)$, where $p^\ast$ is the **equilibrium price** and $Q^\ast$ is the **equilibrium quantity**. At equilibrium, the quantity demanded by consumers equals the quantity supplied by producers.

At $p < p^\ast$, there is **excess demand** (producers willing to sell at $p < x \leq p^\ast$ do not participate), and at $p > p^\ast$, there is **excess supply** (consumers willing to buy at $p^\ast \leq x < p$ do not participate).

**Producer surplus** is the total contribution (revenue minus variable costs) gained by producers in selling a good.
```math
Q = min\{d(p),\:s(p)\}\newline
PS = Qp - \int_0^Q s(Q) \:dQ
```

**Consumer surplus** is the net benefit gained by consumers in purchasing a good.
```math
Q = min\{d(p),\:s(p)\}\newline
CS = - Qp + \int_0^Q d(Q) \:dQ
```

Equilibrium is the optimal state for a market, because it maximizes total surplus. Try setting the price below and see how it affects surplus gained by each section of the market:

{center
  <iframe src="https://www.desmos.com/calculator/qffvb0uqcd?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
}

## Market Events

Various events in the market can influence demand and supply. Generally, an increase in interest for a good (known as *taste*), and an increase in the number of consumers will positively influence demand.

Other events, such as a change in consumer income and a change in the prices of other goods in the market will influence demand depending on the type of good involved.

For **normal goods**, such as clothing or household appliances, an increase in consumer income will positively influence demand (known as a **positive income effect**). For **inferior goods**, such as instant noodles or canned food, an increase in consumer income will negatively influence demand, as consumers move on to higher value items (known as a **negative income effect**).

For a pair of **substitute goods**, as in *Pepsi* and *Coca-Cola*, an increase in the price of one good will increase demand for the other, as consumers become more amenable to purchase its substitute. For a pair of **complementary goods**, as in *tea* and *kettles*, an increase in the price of one good will decrease demand for the other, as both goods must be purchased to properly derive benefit from either. An increase in the demand for one good will generally increase demand for its complement.


