import { MetaData } from "@/components/atoms";
import { Anchor } from "@/components/molecules/Anchor";
import { PagePath } from "@/components/molecules/PagePath";
import { Article, Content, Header, Sidebar } from "@/styles/routes/blog.styled";
import type { IPosts } from "@/types/Post";
import { useTheme } from "@emotion/react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

const Markdown = lazy(() =>
	import("@/components/atoms").then((module) => ({
		default: module.Markdown,
	})),
);

export const Route = createFileRoute("/blog/$slug")({
	component: Slug,
});

function Slug() {
	const { colors } = useTheme();
	const { slug } = Route.useParams();
	const { blog }: IPosts = import.meta.env.POSTS;
	const doc = blog.find((post) => post.slug === slug);

	if (!doc) {
		return <div>Blog post not found</div>;
	}

	const sidebar = blog
		.filter((item) => !item.isExternal)
		.filter((current) => current.id !== doc.id);

	return (
		<AnimatePresence mode="wait">
			<Article
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Suspense fallback={<div>Loading...</div>}>
					<MetaData title={doc.title} description={doc.description} />
					<p className="date">{doc.date}</p>
					<Content>
						<PagePath page="blog" color={colors.link} />

						<Sidebar>
							{sidebar.map(({ title, id, slug }) => {
								return (
									<Anchor
										key={id}
										text={title}
										link={`../${slug}`}
										variant="link"
									/>
								);
							})}
						</Sidebar>

						<Header
							layoutId={`blog-title-${doc.id}`}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							{doc.title}
						</Header>
						<Markdown content={doc} />
						{doc.github && (
							<Anchor text="GitHub Link" link={doc.github} isExternal />
						)}
					</Content>
				</Suspense>
			</Article>
		</AnimatePresence>
	);
}
