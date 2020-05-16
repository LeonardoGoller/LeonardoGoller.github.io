---
layout: post
title:  "Quantum Isothermal Processes are Not Isoenergetic"
date: 2020-05-17 00:00:01 +0530
tags: [nature, physics]
excerpt: I define what it means for a quantum system to undergo an isothermal process, and we see that unlike what happens for a classical ideal gas, the internal energy of the system can change in such a process.
---

In a classical [isothermal
process](https://en.wikipedia.org/wiki/Isothermal_process) the internal energy
of the system remains invariant because for a classical ideal gas, the
internal energy is proportional to the temperature of the gas[^1].  However, if
we define a quantum analogue of the isothermal process, this is not necessarily
true. With
[all](https://en.wikipedia.org/wiki/Quantum_superposition)
[the](https://en.wikipedia.org/wiki/EPR_paradox)
[weird](https://en.wikipedia.org/wiki/Quantum_teleportation)
[things](https://en.wikipedia.org/wiki/Casimir_effect) that happen in quantum
systems, this is not really surprising, but it is definitely interesting.

In this post, I start by building some elementary quantum thermodynamics:
we shall look at the quantum version of the [first law of
thermodynamics](https://en.wikipedia.org/wiki/First_law_of_thermodynamics),
some general facts about quantum thermodynamic processes, and then define an
effective temperature for quantum systems and a quantum analogue of the
isothermal process. Once we have the definition of an isothermal process, we
shall see with an easy computation that when the working substance is a
[quantum two-level system](https://en.wikipedia.org/wiki/Two-state_quantum_system), 
the internal energy is not invariant during the process.


## The Quantum First Law of Thermodynamics

If the energy eigenstates of our quantum system are labelled by $$|n\rangle$$
with corresponding eigenenergies $$E_n$$, the Hamiltonian (in the energy basis)
can be written as

$$
  \hat{H} = \sum_n E_n |n \rangle \langle n|. \tag{1}
$$

It is reasonable to identify the internal energy $$U$$, of the quantum system
with the expectation value of the Hamiltonian, hence

$$
  U = \langle \hat{H} \rangle = \sum_n E_n P_n, \tag{2}
  \label{internal-energy}
$$

where $$P_n = \langle n | \hat{\rho} |n \rangle$$ is the occupation probability
for the $$n$$th eigenstate, and $$\hat{\rho}$$ is the density matrix.

We recall the usual expression of the first law: $$dU = dQ + dW$$, and
take the exterior derivative of $$\eqref{internal-energy}$$ to get a quantum
analogue[^2]

$$
  dU = \sum_n \left(E_n dP_n + P_n dE_n\right). \tag{3}
  \label{quantum-first-law}
$$

In order to identify the analogues of heat exchanged and work done, we
recall [the Gibbs
formula](https://en.wikipedia.org/wiki/Entropy_(statistical_thermodynamics#Gibbs_entropy_formula)) for entropy: $$S = - \sum_n P_n \ln
P_n$$, and because the heat exchanged is $$dQ = TdS$$, we identify

$$
  dQ = \sum_n E_n dP_n. \tag{4}
  \label{quantum-heat}
$$

Consequently, the work done is identified as 

$$
  dW = \sum_n P_n dE_n. \tag{5}
  \label{quantum-work}
$$

In heat engines based on quantum systems, a change in energy levels is
associated with work done by the engine, and a change in occupation
probabilities is associated with the heat exchanged between the engine and the
heat bath.


## Effective Temperature for Quantum Systems and the Quantum Isothermal Process

Statistical mechanics tells us that when a quantum system is in equilibrium
with a heat bath at temperature $$T = 1/k_B \beta$$, the density matrix is
given by

$$
  \rho(\beta) = \frac{e^{-\beta \hat{H}}}{Z(\beta)}, \tag{6}
$$

where $$Z(\beta) = \text{Tr}(e^{-\beta \hat{H}})$$ is the partition function.
Occupation probabilities $$P_n$$ can be obtained from the diagonal elements of
the density matrix,

$$
  P_n = \langle n |\hat{\rho}(\beta)| n\rangle = \frac{e^{-\beta E_n}}{\sum_m
  e^{-\beta E_m}}, \tag{7}
  \label{canonical-distribution}
$$

and we note that when the system is at a fixed temperature $$T$$, the
occupation probabilities must satisfy the above distribution.

The _effective temperature_ of a quantum system is defined by 'inverting'
$$\eqref{canonical-distribution}$$. In order to understand what this means, we
look at a system with only two states $$|g\rangle$$ and $$|e\rangle$$ with
energies $$E_g$$ and $$E_e$$ respectively. If the system is in equilibrium with
a heat bath, the occupation probabilities satisfy

$$
  \frac{P_e}{P_g} = e^{-\beta (E_e - E_g)}, \tag{8}
$$

and the relation can easily be inverted to get the temperature in terms of the
occupation probabilities

$$
  T = \frac{E_e - E_g}{k_B} \left(\ln \frac{P_g}{P_e} \right)^{-1}. \tag{9}
$$

Based on the above expression, we can obtain an effective temperature even
when the system is not in equilibrium with a heat bath: $$k_B T_{eff} = (E_e - E_g) / \ln (P_g/P_e)$$.

We see that for a two-level system, the effective temperature is uniquely
defined for all occupation probabilities $$P_g$$ and $$P_e$$. However, this
might not be so when the system has more than two levels. In general, a unique
effective temperature is defined only when the occupation probabilities satisfy
the canonical distribution in $$\eqref{canonical-distribution}$$.

Once we know what a temperature means for an arbitrary quantum system,
we can define a quantum isothermal process in the obvious way. In a quantum
isothermal process, energy levels and occupation probabilities must change
simultaneously to always satisfy the canonical distribution for a fixed
temperature.

Before looking at what happens to a two-level system in an isothermal process,
we shall note a fact that will make certain computations easier:
_the work done $$dW$$, heat exchanged $$dQ$$, and therefore the change in
internal energy $$dU$$, are invariant under a uniform shift of all energy
levels._

If we assume that all energy levels shift uniformly: $$E_n' = E_n + \delta$$,
the first thing we note is that that $$dE_n' = dE_n$$ because $$\delta$$ is a
constant. Next, we consider the occupation probabilities,

$$
  P_n' = e^{-\beta (E_n + \delta)} \left(\sum_m e^{-\beta (E_m + \delta)}\right)^{-1}
       = e^{-\beta E_n} \left(\sum_m e^{-\beta E_m}\right)^{-1}
       = P_n, \tag{10}
$$

and observe that $$dP_n' = dP_n$$. Finally, from the quantum analogues of heat
$$\eqref{quantum-heat}$$, work $$\eqref{quantum-work}$$; and the first law
$$\eqref{quantum-first-law}$$, the result follows.

In particular we note that, for the two-level system, assuming $$E_g = 0$$
has no effect on $$dU.$$

## The Two-Level System in an Isothermal Process

In an isothermal process $$i \to f$$, we can assume that $$E_g^f = E_g^i = 0$$
and $$E_e^f = \zeta E_e^i$$, where $$\zeta > 0$$ is some constant that can be
used to parametrize the evolution of the system under the process.
For our final trick, we consider the internal energy of the two-level system

$$
  U(\zeta) = \sum_n P_n E_n = \frac{e^{-\beta \zeta E_e}}{1 + e^{-\beta \zeta E_e}} \zeta E_e, \tag{11}
$$

and its derivative with respect to $$\zeta$$

$$
\begin{align}
  \frac{dU(\zeta)}{d\zeta} & = \frac{e^{-\beta \zeta E_e}}{1 + e^{-\beta \zeta E_e}}
  \zeta E_e \left(\frac{1}{\zeta} - \frac{\beta}{1 + e^{-\beta \zeta E_e}}\right) \\
  & = U(\zeta) \left(\frac{1}{\zeta} - \frac{\beta}{1 + e^{-\beta \zeta E_e}}\right), \tag{12}
\end{align}
$$

which, in general, is non-zero. Thus, we have shown that the internal energy is
not invariant[^3] in a quantum isothermal process, and I have fulfilled my promise.

----

This blog post was inspired by an appendix in _Quantum Thermodynamic Cycles and
Quantum Heat Engines_ ([PhysRevE 76.031105](https://journals.aps.org/pre/abstract/10.1103/PhysRevE.76.031105),
[arXiv:quant-ph/0611275](https://arxiv.org/abs/quant-ph/0611275)) by Quan et
al. In the article, the authors have done a more general computation which can
also be applied to a quantum harmonic oscillator and a particle in an infinite
square well, but they assume (without any justification) that all the energy
levels change in the same ratio in an isothermal process. This is not a problem
for the two-level system because there are only two energy levels.

----

[^1]: I know that isothermal processes with a (classical) non-ideal gas as working substance are not, in general, isoenergetic. The title only is a thinly veiled excuse to write about quantum thermodynamic processes.

[^2]: For more details on the quantum version of the first law, refer to _Quantum Heat Engine With Multi-Level Quantum Systems_ ([PhysRevE 72.056110](https://journals.aps.org/pre/abstract/10.1103/PhysRevE.72.056110), [arXiv:quant-ph/0504118](https://arxiv.org/abs/quant-ph/0504118)) by Quan et al.

[^3]: I am not completely unapologetic for the double negatives in this post.
