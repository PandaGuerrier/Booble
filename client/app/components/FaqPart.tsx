import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionItem, Button, ButtonGroup, Link } from '@nextui-org/react'
import { Divider } from '@nextui-org/divider'

// @ts-ignore
export default function FaqPart() {
  const faq = [
    {
      name: 'Comment se proteger ?',
      description: `

      `,
    }
      ]
  return (
      <>
        <div className={'mt-10 md:px-96 space-y-5 md:space-y-10 py-4'}>
          <div className={"flex justify-center"}>
            <h1 className={'text-blue-600 text-xl md:text-7xl'}>Foire au questions</h1>
          </div>
          <div className={'space-y-10'}>
            <Accordion variant="splitted">
                <AccordionItem key={0} aria-label="Comment se protéger ?" title="Comment se protéger ?">
                  <div className={"space-y-12"}>
                    <p>Se protéger des bulles de filtre, également connues sous le nom de "bulles de filtrage", nécessite une approche proactive et consciente pour gérer la manière dont vous recevez et interagissez avec l'information en ligne. Voici quelques stratégies clés :</p>
                    <ul>
                      <li>
                        <span className={"text-blue-600"}>Diversifiez vos sources d'information :</span> Ne vous fiez pas à une seule source ou plateforme pour vos nouvelles et informations. Cherchez activement des sources variées, y compris celles qui peuvent offrir des perspectives différentes ou contradictoires par rapport à vos croyances habituelles.
                      </li>
                      <li>
                        <span className={"text-blue-600"}>Utilisez des moteurs de recherche neutres :</span> Certains moteurs de recherche sont moins susceptibles de personnaliser les résultats en fonction de votre historique de recherche. Essayez d'utiliser des moteurs de recherche comme DuckDuckGo qui ne suivent pas vos activités pour personnaliser les résultats.
                      </li>
                      <li>
                        <span className={"text-blue-600"}>Nettoyez vos cookies et votre historique :</span> Les cookies et l'historique de navigation jouent un rôle majeur dans la façon dont les algorithmes déterminent ce qu'ils devraient vous montrer. En les effaçant régulièrement, vous pouvez réduire la personnalisation.
                      </li>
                      <li>
                        <span className={"text-blue-600"}>Soyez conscient des algorithmes :</span> Prenez conscience de la manière dont les plateformes en ligne utilisent des algorithmes pour filtrer et présenter le contenu. Cela peut inclure des recommandations sur les médias sociaux, des résultats de recherche et des suggestions de vidéo.
                      </li>
                      <li>
                        <span className={"text-blue-600"}>Utilisez des outils de blocage de publicités et de suivi :</span> Les extensions de navigateur comme uBlock Origin ou Privacy Badger peuvent aider à bloquer les trackers qui alimentent les bulles de filtres.
                      </li>
                      <li>
                        <span className={"text-blue-600"}>Vérifiez activement les faits :</span> Avant de croire ou de partager des informations, vérifiez-les auprès de sources fiables et indépendantes.
                      </li>
                    </ul>
                  </div>

                </AccordionItem>
          </Accordion>

        </div>
        </div>
      </>
  )
}